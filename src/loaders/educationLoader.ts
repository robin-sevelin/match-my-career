import { IEducaton } from '../models/IEducation';
import { getEducationForms } from '../services/DataService';

export interface IEducationLoader {
  educationForms: IEducaton[];
}

export const educationLoader = async () => {
  return {
    educationForms: await getEducationForms(),
  } as IEducationLoader;
};
