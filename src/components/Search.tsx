import { FormEvent, useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { getEducations } from '../services/DataService';
import { ResultContainer } from './ResultContainer';
import { ActionType } from '../reducers/SearchReducer';
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react';

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
        <DigiFormInputSearch afLabel='Jobbtitel' afButtonText='Sök' onAfOnChange={(e) => dispatch({type: ActionType.ADDED_SEARCH_TEXT, payload: e.target.value})}></DigiFormInputSearch>
      </form>
      <ResultContainer />
    </>
  );
};