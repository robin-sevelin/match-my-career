import { IEducation } from '../models/IEducation';
import { Search } from '../models/Search';

export interface ISearchAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED_SEARCH_TEXT,
  ADDED_EDUCATIONS,
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

    default:
      return search;
  }
};
