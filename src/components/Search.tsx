import { FormEvent, useContext, useState } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { ActionType } from '../reducers/SearchReducer';
import { getEducations } from '../services/DataService';
import { ResultContainer } from './ResultContainer';

export const Search = () => {
  const { searchDispatch, search } = useContext(SearchContext);
  const [input, setInput] = useState('');
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    searchDispatch({ type: ActionType.ADDED_SEARCH_TEXT, payload: input });

    const response = await getEducations(search.searchText);
    console.log(response);
    localStorage.removeItem('search');
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
