import { Result } from '../models/Result';

export interface IResultAction {
  type: ResultActionType;
  payload: string;
}

export enum ResultActionType {
  ADDED_SEARCH,
}

export const ResultReducer = (result: Result, action: IResultAction) => {
  switch (action.type) {
    case ResultActionType.ADDED_SEARCH: {
      return { ...result, freeSearchText: action.payload };
    }

    default:
      return result;
  }
};
