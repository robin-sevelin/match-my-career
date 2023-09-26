import { useEffect, useState } from 'react';
import { IOccupation } from '../models/IRelatedOccupations';
import { postMatchByText } from '../services/DataService';
import { Search } from '../models/Search';

export const useGetOccupations = (search: Search) => {
  const [occupations, setOccupations] = useState<IOccupation[]>([]);

  useEffect(() => {
    if (search) {
      const getData = async (text: string, education: string) => {
        const data = await postMatchByText(text, education);
        setOccupations(data);
      };

      getData(
        search.occupationsSearch.text,
        search.occupationsSearch.education
      );
    }
  }, [search]);

  return { occupations } as const;
};
