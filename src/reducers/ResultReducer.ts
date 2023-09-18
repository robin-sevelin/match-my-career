import { Result } from '../models/Result';

export interface IResultAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED_SEARCH_TEXT,
}

export const ResultReducer = (result: Result, action: IResultAction) => {
  switch (action.type) {
    case ActionType.ADDED_SEARCH_TEXT: {
      return { ...result };
    }

    default:
      return result;
  }
};
