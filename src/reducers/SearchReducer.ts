import { Search } from '../models/Search';

export interface ISearchAction {
  type: SearchActionType;
  payload: string;
}

export enum SearchActionType {
  ADDED_EDUCATION_FORM,
  ADDED_EDUCATION_TYPE,
  ADDED_SEARCH_TEXT,
  ADDED_MUNICIPALITIES,
  ADDED_SEARCH,
}

export const SearchReducer = (search: Search, action: ISearchAction) => {
  switch (action.type) {
    case SearchActionType.ADDED_EDUCATION_FORM: {
      return { ...search, educationForm: action.payload };
    }

    case SearchActionType.ADDED_EDUCATION_TYPE: {
      return { ...search, educationType: action.payload };
    }

    case SearchActionType.ADDED_SEARCH_TEXT: {
      return { ...search, searchText: action.payload };
    }

    case SearchActionType.ADDED_MUNICIPALITIES: {
      return { ...search, municipalities: action.payload };
    }

    default:
      return search;
  }
};
