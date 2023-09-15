import { useEffect } from 'react';
import { IEducaton } from '../models/IEducation';

export const useGetEducationData = (
  educationTypes: IEducaton[],
  educationForms: IEducaton[],
  getData: () => void
) => {
  useEffect(() => {
    if (educationTypes.length === 0 || educationForms.length === 0) {
      getData();
    }
  });
};
