import { Dispatch, createContext } from 'react';
import { Result } from '../models/Result';
import { IResultAction } from '../reducers/ResultReducer';

export interface IResultContext {
  result: Result;
  resultDispatch: Dispatch<IResultAction>;
}

export const ResultContext = createContext<IResultContext>({
  result: new Result(''),
  resultDispatch: () => {},
});
