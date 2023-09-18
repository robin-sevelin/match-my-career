import { ChangeEvent, FormEvent, useContext } from 'react';
import { EducationForm } from './EducationForm';
import { SearchContext } from '../contexts/SearchContext';
import { ActionType } from '../reducers/SearchReducer';
import { EducationType } from './EducationType';
import { getEducations } from '../services/DataService';

export const Form = () => {
  const { dispatch, search } = useContext(SearchContext);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await getEducations(
      search.searchText,
      search.educationForm,
      search.educationType
    );
    console.log(response);
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

        <EducationForm />
        <EducationType />
        <button type='submit'>Sök</button>
      </form>
    </>
  );
};
