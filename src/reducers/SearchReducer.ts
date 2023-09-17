import { Search } from '../models/Search';

export interface ISearchAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED_EDUCATION_FORM,
  ADDED_EDUCATION_TYPE,
  ADDED_SEARCH_TEXT,
}

export const SearchReducer = (search: Search, action: ISearchAction) => {
  switch (action.type) {
    case ActionType.ADDED_EDUCATION_FORM: {
      return { ...search, educationForm: action.payload };
    }

    case ActionType.ADDED_EDUCATION_TYPE: {
      return { ...search, educationType: action.payload };
    }

    case ActionType.ADDED_SEARCH_TEXT: {
      return { ...search, searchText: action.payload };
    }

    default:
      return search;
  }
};
