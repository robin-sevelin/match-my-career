import { IEducation } from '../models/IEducation';
import { IEnrichedOccupation } from '../models/IEnrichedOccupation';
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
  SET_DISPLAYED_ABOUT_VIEW,
}

export const SearchReducer = (search: Search, action: ISearchAction) => {
  switch (action.type) {
    case ActionType.ADDED_SEARCH_TEXT: {
      return { ...search, searchText: action.payload };
    }

    case ActionType.ADDED_EDUCATIONS: {
      const data = JSON.parse(action.payload) as IEducation[];

      return { ...search, occupations: [], educations: data, searchText: '' };
    }

    case ActionType.ADDED_OCCUPATIONS: {
      const data = JSON.parse(action.payload) as IOccupation[];

      return { ...search, occupations: data };
    }

    case ActionType.ADDED_ENRICHED_OCCUPATIONS: {
      const data = JSON.parse(action.payload) as IEnrichedOccupation;

      return { ...search, enchrichedOccupation: data };
    }

    case ActionType.SET_DISPLAYED_ABOUT_VIEW: {
      const data = JSON.parse(action.payload) as IEducation;

      return { ...search, showAboutView: data };
    }

    default:
      return search;
  }
};
