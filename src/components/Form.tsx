import { ChangeEvent, FormEvent, useContext } from 'react';
import { EducationForm } from './EducationForm';

import { SearchContext } from '../contexts/SearchContext';
import { ActionType } from '../reducers/SearchReducer';
import { postSearchText } from '../services/DataService';

export const Form = () => {
  const { dispatch, search } = useContext(SearchContext);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await postSearchText(
      search.educationForm,
      search.searchText,
      search.resultAmount
    );

    console.log(response);
    localStorage.removeItem('search');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='jobb-titel'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: ActionType.ADDED_SEARCH_TEXT,
              payload: e.target.value,
            })
          }
        />
        <input
          min={1}
          max={20}
          type='number'
          placeholder='antal träffar'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({
              type: ActionType.ADDED_RESULT_AMOUNT,
              payload: e.target.value.toString(),
            })
          }
        />
        <EducationForm />
        {/* <EducationTypes /> */}
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
