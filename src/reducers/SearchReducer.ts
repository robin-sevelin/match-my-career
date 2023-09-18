import { IEducation } from '../models/IEducation';
import { IEnrichedOccupations } from '../models/IEncrichedOccupations';
import { IOccupation } from '../models/IRelatedOccupations';

import { Search } from '../models/Search';

export interface ISearchAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED_SEARCH_TEXT,
  ADDED_EDUCATIONS,
  ADDED_OCCUPATIONS,
  ADDED_ENRICHED_OCCUPATIONS,
}

export const SearchReducer = (search: Search, action: ISearchAction) => {
  switch (action.type) {
    case ActionType.ADDED_SEARCH_TEXT: {
      return { ...search, searchText: action.payload };
    }

    case ActionType.ADDED_EDUCATIONS: {
      const data = JSON.parse(action.payload) as IEducation[];

      return { ...search, educations: data };
    }

    case ActionType.ADDED_OCCUPATIONS: {
      const data = JSON.parse(action.payload) as IOccupation[];

      return { ...search, occupations: data };
    }

    case ActionType.ADDED_ENRICHED_OCCUPATIONS: {
      const data = JSON.parse(action.payload) as IEnrichedOccupations;
      console.log(data);

      return { ...search, enrichedOccupations: data };
    }

    default:
      return search;
  }
};
