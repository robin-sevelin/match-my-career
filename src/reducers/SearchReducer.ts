import { Search } from '../models/Search';

export interface ISearchAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED_EDUCATION_TYPE,
  ADDED_EDUCATION_FORM,
}

export const SearchReducer = (search: Search, action: ISearchAction) => {
  switch (action.type) {
    case ActionType.ADDED_EDUCATION_TYPE: {
      return { ...search, educationType: action.payload };
    }

    case ActionType.ADDED_EDUCATION_FORM: {
      return { ...search, educationForm: action.payload };
    }

    default:
      return search;
  }
};
