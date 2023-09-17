import { IEducaton } from '../models/IEducation';
import { get, post } from './DataServiceBase';

export const getEducationForms = async (): Promise<IEducaton[]> => {
  return await get<IEducaton[]>(
    import.meta.env.VITE_BASE_URL + 'searchparameters/education_forms'
  );
};

export const getEnrichedOccupations = async (id: string) => {
  return await get(
    `${
      import.meta.env.BASE_URL
    }enriched_occupations?occupation_id=${id}&include_metadata=true`
  );
};

export const postSearchText = async (
  title: string,
  education: string,
  amount: number
) => {
  return await post(
    `${
      import.meta.env.VITE_BASE_URL
    }occupations/match-by-text?input_text=${title}&input_headline=${education}&limit=${amount}&offset=0&include_metadata=true`
  );
};
