import { FormEvent, useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { getEducations } from '../services/DataService';
import { ResultContainer } from './ResultContainer';
import { ActionType } from '../reducers/SearchReducer';

export const Search = () => {
  const { dispatch, search } = useContext(SearchContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await getEducations(search.searchText);

    dispatch({
      type: ActionType.ADDED_EDUCATIONS,
      payload: JSON.stringify(response),
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='jobb-titel'
          onChange={(e) => dispatch({type: ActionType.ADDED_SEARCH_TEXT, payload: e.target.value})}
        />
        <button type='submit'>Sök</button>
      </form>
      <ResultContainer />
    </>
  );
};
