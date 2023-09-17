import { IFormValue } from '../models/IFormValue';
import { getEducationForms, getEducationTypes } from '../services/DataService';

export interface IFormValueLoader {
  educationForms: IFormValue[];
  educationTypes: IFormValue[];
}

export const educationLoader = async () => {
  return {
    educationForms: await getEducationForms(),
    educationTypes: await getEducationTypes(),
  } as IFormValueLoader;
};
