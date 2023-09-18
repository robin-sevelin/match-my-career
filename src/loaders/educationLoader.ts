import { IFormValue } from '../models/IFormValue';
import {
  getEducationForms,
  getEducationTypes,
  getmMunicipalities,
} from '../services/DataService';

export interface IFormValueLoader {
  educationForms: IFormValue[];
  educationTypes: IFormValue[];
  municipalities: IFormValue[];
}

export const educationLoader = async () => {
  return {
    educationForms: await getEducationForms(),
    educationTypes: await getEducationTypes(),
    municipalities: await getmMunicipalities(),
  } as IFormValueLoader;
};
