import { Dispatch, createContext } from 'react';
import { ISearchAction } from '../reducers/SearchReducer';
import { Search } from '../models/Search';

export interface ISearchContext {
  search: Search;
  dispatch: Dispatch<ISearchAction>;
}

export const SearchContext = createContext<ISearchContext>({
  search: new Search(
    '',
    [],
    [],
    {
      id: '',
      occupation_label: '',
      metadata: { enriched_candidates_term_frequency: { competencies: [] } },
    },
    true,
    true
  ),
  dispatch: () => {},
});
