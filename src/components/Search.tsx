import { FormEvent, useContext, useState } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { getEducations } from '../services/DataService';
import { ResultContainer } from './ResultContainer';
import { ActionType } from '../reducers/SearchReducer';

export const Search = () => {
  const { dispatch, search } = useContext(SearchContext);

  const [input, setInput] = useState('');
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await getEducations(search.searchText);
    dispatch({
      type: ActionType.ADDED_SEARCH_TEXT,
      payload: input,
    });

    dispatch({
      type: ActionType.ADDED_EDUCATIONS,
      payload: JSON.stringify(response),
    });

    setInput('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type='text'
          placeholder='jobb-titel'
          onChange={(e) => setInput(e.target.value)}
        />

        {/* <EducationForm />
        <EducationType />
        <Municipalities /> */}
        <button type='submit'>Sök</button>
      </form>
      <ResultContainer />
    </>
  );
};
