import { IEducaton } from '../models/IEducation';

import { get } from './DataServiceBase';

export const getEducationForms = async (): Promise<IEducaton[]> => {
  return await get<IEducaton[]>(
    import.meta.env.VITE_SEARCH_BASE_URL + 'searchparameters/education_forms'
  );
};

export const getEducationTypes = async (): Promise<IEducaton[]> => {
  return await get<IEducaton[]>(
    import.meta.env.VITE_SEARCH_BASE_URL + 'searchparameters/education_types'
  );
};

export const getmMunicipalities = async (): Promise<IEducaton[]> => {
  return await get<IEducaton[]>(
    import.meta.env.VITE_SEARCH_BASE_URL + 'searchparameters/municipalities'
  );
};

export const getEnrichedOccupations = async () => {};

export const postSearchText = async () => {};
