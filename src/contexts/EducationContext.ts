import { createContext } from 'react';
import { IEducaton } from '../models/IEducation';

export interface IEducationContext {
  educationForm: IEducaton[];
  educationType: IEducaton[];
}

export const EducationContext = createContext<IEducationContext>({
  educationForm: [],
  educationType: [],
});
