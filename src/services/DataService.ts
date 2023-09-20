import { IEducation } from '../models/IEducation';
import { IEducationResponse } from '../models/IEducationResponse';
import { IEnrichedOccupation } from '../models/IEnrichedOccupation';

import { IFormValue } from '../models/IFormValue';
import {
  IOccupation,
  IRealatedOccupations,
} from '../models/IRelatedOccupations';
import { get, post } from './DataServiceBase';

export const getEducationForms = async (): Promise<IFormValue[]> => {
  return await get<IFormValue[]>(
    import.meta.env.VITE_BASE_URL + 'searchparameters/education_forms'
  );
};

export const getEducationTypes = async (): Promise<IFormValue[]> => {
  return await get<IFormValue[]>(
    import.meta.env.VITE_BASE_URL + 'searchparameters/education_types'
  );
};

export const getmMunicipalities = async (): Promise<IFormValue[]> => {
  return await get<IFormValue[]>(
    import.meta.env.VITE_BASE_URL + 'searchparameters/municipalities'
  );
};

export const getEducations = async (text: string): Promise<IEducation[]> => {
  const response = await get<IEducationResponse>(
    `${
      import.meta.env.VITE_BASE_URL
    }educations?query=${text}&distance=false&filter_education_plan_exists=false`
  );

  return response.result;
};

export const getEnrichedOccupations = async (
  id: string
): Promise<IEnrichedOccupation> => {
  return await get<IEnrichedOccupation>(
    `${
      import.meta.env.VITE_BASE_URL
    }enriched_occupations?occupation_id=${id}&include_metadata=true`
  );
};

export const postMatchByText = async (
  text: string,
  education: string
): Promise<IOccupation[]> => {
  const resposne = await post<IRealatedOccupations>(
    `${
      import.meta.env.VITE_BASE_URL
    }occupations/match-by-text?input_text=${text}&input_headline=${education}&limit=10&offset=0&include_metadata=true`
  );

  return resposne.related_occupations;
};

export const getEducationById = async (id: string) => {
  return await get<IEducation>(`${import.meta.env.VITE_BASE_URL}educations/${id}`);
};
