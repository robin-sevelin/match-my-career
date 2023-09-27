import { useEffect, useState } from 'react';
import { IOccupation } from '../models/IRelatedOccupations';
import { postMatchByText } from '../services/DataService';
import { Search } from '../models/Search';

export const useGetOccupations = (search: Search) => {
  const [occupations, setOccupations] = useState<IOccupation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (search) {
      const getData = async (text: string, education: string) => {
        try {
          const data = await postMatchByText(text, education);
          setOccupations(data);
        } catch (error) {
          console.log('Error', error);
        } finally {
          setIsLoading(false);
        }
      };
      getData(
        search.occupationsSearch.text,
        search.occupationsSearch.education
      );
    }
  }, [search]);

  return { occupations, isLoading } as const;
};
