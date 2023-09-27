import { useState, useEffect } from 'react';
import { IEnrichedOccupation } from '../models/IEnrichedOccupation';
import { getEnrichedOccupations } from '../services/DataService';
import { Search } from '../models/Search';
import { ENRICHED_OCCUPATION_BASE_VALUES } from '../constants/EnrichedOccupationBaseValues';

export const useGetEnrichedOccupations = (search: Search) => {
  const [occupation, setOccupation] = useState<IEnrichedOccupation>(
    ENRICHED_OCCUPATION_BASE_VALUES
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
