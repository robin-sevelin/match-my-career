import { Search } from '../models/Search';

export interface ISearchAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED_EDUCATION_FORM,
  ADDED_SEARCH_TEXT,
  ADDED_RESULT_AMOUNT,
}

export const SearchReducer = (search: Search, action: ISearchAction) => {
  switch (action.type) {
    case ActionType.ADDED_EDUCATION_FORM: {
      return { ...search, educationForm: action.payload };
    }

    case ActionType.ADDED_SEARCH_TEXT: {
      return { ...search, searchText: action.payload };
    }

    case ActionType.ADDED_RESULT_AMOUNT: {
      return { ...search, resultAmount: +action.payload };
    }

    default:
      return search;
  }
};
