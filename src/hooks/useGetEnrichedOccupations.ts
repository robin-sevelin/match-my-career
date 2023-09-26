import { useState, useEffect } from 'react';
import { IEnrichedOccupation } from '../models/IEnrichedOccupation';
import { getEnrichedOccupations } from '../services/DataService';
import { enchrichedOccupationBaseValues } from '../models/initialValues';
import { Search } from '../models/Search';

export const useGetEnrichedOccupations = (search: Search) => {
  const [occupation, setOccupation] = useState<IEnrichedOccupation>(
    enchrichedOccupationBaseValues
  );

  useEffect(() => {
    if (search) {
      const getData = async (id: string) => {
        const data = await getEnrichedOccupations(id);
        setOccupation(data);
      };

      getData(search.enchrichedOccupationSearch);
    }
  }, [search]);

  return { occupation } as const;
};
