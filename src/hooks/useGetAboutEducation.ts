import { useEffect, useState } from 'react';
import { getEducationById } from '../services/DataService';
import { IAboutEducation } from '../models/IAboutEducation';
import { aboutEducationBaseValues } from '../models/initialValues';

export const useGetAboutEducation = (id: string) => {
  const [education, setEducation] = useState<IAboutEducation>(
    aboutEducationBaseValues
  );

  useEffect(() => {
    if (id) {
      const getData = async (id: string) => {
        const data = await getEducationById(id);

        setEducation(data);
      };
      getData(id);
    }
  }, [id]);

  return { education } as const;
};
