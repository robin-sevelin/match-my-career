import { useEffect, useState } from 'react';
import { getEducationById } from '../services/DataService';
import { IAboutEducation } from '../models/IAboutEducation';
import { ABOUT_EDUCATION_BASE_VALUES } from '../constants/AboutEducationBaseValues';
import { Search } from '../models/Search';

export const useGetAboutEducation = (search: Search) => {
  const [education, setEducation] = useState<IAboutEducation>(
    ABOUT_EDUCATION_BASE_VALUES
  );

  useEffect(() => {
    if (search) {
      const getData = async (id: string) => {
        const data = await getEducationById(id);

        setEducation(data);
      };
      getData(search.aboutEducationSearch);
    }
  }, [search]);

  return { education } as const;
};
