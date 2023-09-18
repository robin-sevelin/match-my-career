import { FormEvent, useContext, useState } from 'react';
import { SearchContext } from '../contexts/SearchContext';

import { getEducations } from '../services/DataService';
import { ResultContainer } from './ResultContainer';
import { ResultContext } from '../contexts/ResultContext';
import { SearchActionType } from '../reducers/SearchReducer';
import { ResultActionType } from '../reducers/ResultReducer';

export const Search = () => {
  const { searchDispatch, search } = useContext(SearchContext);
  const { resultDispatch } = useContext(ResultContext);

  const [input, setInput] = useState('');
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    searchDispatch({
      type: SearchActionType.ADDED_SEARCH_TEXT,
      payload: input,
    });
    resultDispatch({ type: ResultActionType.ADDED_SEARCH, payload: input });

    const response = await getEducations(search.searchText);
    console.log(response);
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
