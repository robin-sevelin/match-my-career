import { IEducaton } from '../models/IEducation';
import { getEducationForms, getEducationTypes } from '../services/DataService';

export interface IEducationLoader {
  educationForms: IEducaton[];
  educationTypes: IEducaton[];
}

export const educationLoader = async () => {
  return {
    educationForms: await getEducationForms(),
    educationTypes: await getEducationTypes(),
  } as IEducationLoader;
};
