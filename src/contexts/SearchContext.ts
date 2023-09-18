import { Dispatch, createContext } from 'react';
import { ISearchAction } from '../reducers/SearchReducer';
import { Search } from '../models/Search';

export interface ISearchContext {
  search: Search;
  searchDispatch: Dispatch<ISearchAction>;
}

export const SearchContext = createContext<ISearchContext>({
  search: new Search('', '', '', ''),
  searchDispatch: () => {},
});
