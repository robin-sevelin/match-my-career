import { IEducation } from '../models/IEducation';
import { IEducationResponse } from '../models/IEducationResponse';
import { IFormValue } from '../models/IFormValue';
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

export const getEducations = async (
  text: string,
  form: string,
  type: string
): Promise<IEducation[]> => {
  const response = await get<IEducationResponse>(
    `${
      import.meta.env.VITE_BASE_URL
    }educations?query=${text}&education_type=${type}&education_form=${form}&distance=false&filter_education_plan_exists=false`
  );

  return response.result;
};

export const getEnrichedOccupations = async (id: string) => {
  return await get(
    `${
      import.meta.env.VITE_BASE_URL
    }enriched_occupations?occupation_id=${id}&include_metadata=true`
  );
};

export const postMatchByText = async (text: string, education: string) => {
  const response = await post(
    `${
      import.meta.env.BASE_URL
    }occupations/match-by-text?input_text=${text}&input_headline=${education}&limit=10&offset=0&include_metadata=true`
  );

  return response;
};
