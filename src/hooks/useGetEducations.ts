import { useEffect, useState } from 'react';
import { IEducation } from '../models/IEducation';
import { getEducations } from '../services/DataService';
import { Search } from '../models/Search';

export const useGetEducations = (search: Search) => {
  const [educations, setEducations] = useState<IEducation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (search) {
      const getData = async (searchText: string) => {
        try {
          const data = await getEducations(searchText);
          setEducations(data);
        } catch (error) {
          console.log('Error', error);
        } finally {
          setIsLoading(false);
        }
      };
      getData(search.educationSearch);
    }
  }, [search]);

  return { educations, isLoading } as const;
};
