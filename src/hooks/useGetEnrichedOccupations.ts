import { useState, useEffect } from 'react';
import { IEnrichedOccupation } from '../models/IEnrichedOccupation';
import { getEnrichedOccupations } from '../services/DataService';
import { Search } from '../models/Search';
import { enchrichedOccupationBaseValues } from '../models/initialValues';

export const useGetEnrichedOccupations = (search: Search) => {
  const [occupations, setOccupations] = useState<IEnrichedOccupation>(
    enchrichedOccupationBaseValues
  );

  useEffect(() => {
    if (search) {
      const getData = async (search: Search) => {
        const data = await getEnrichedOccupations(
          search.enchrichedOccupation.id
        );
        setOccupations(data);
      };

      getData(search);
    }
  }, [search]);

  return { occupations } as const;
};
