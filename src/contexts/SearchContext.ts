import { Dispatch, createContext } from 'react';
import { ISearchAction } from '../reducers/SearchReducer';
import { Search } from '../models/Search';
import {
  aboutEducationBaseValues,
  enchrichedOccupationBaseValues,
} from '../models/initialValues';

export interface ISearchContext {
  search: Search;
  dispatch: Dispatch<ISearchAction>;
}

export const SearchContext = createContext<ISearchContext>({
  search: new Search(
    '',
    [],
    [],
    enchrichedOccupationBaseValues,
    aboutEducationBaseValues
  ),
  dispatch: () => {},
});
