import { useEffect, useState } from 'react';
import { IEducation } from '../models/IEducation';
import { getEducations } from '../services/DataService';
import { Search } from '../models/Search';

export const useGetEducations = (search: Search) => {
  const [educations, setEducations] = useState<IEducation[]>([]);

  useEffect(() => {
    if (search) {
      const getData = async (searchText: string) => {
        const data = await getEducations(searchText);

        setEducations(data);
      };
      getData(search.educationSearch);
    }
  }, [search]);

  return { educations } as const;
};
