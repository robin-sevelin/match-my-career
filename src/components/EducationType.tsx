import { SearchContext } from '../contexts/SearchContext';
import { ChangeEvent, useContext } from 'react';
import { ActionType } from '../reducers/SearchReducer';
import { useLoaderData } from 'react-router-dom';
import { IFormValueLoader } from '../loaders/educationLoader';

export const EducationType = () => {
  const { dispatch } = useContext(SearchContext);
  const { educationTypes } = useLoaderData() as IFormValueLoader;

  return (
    <>
      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          dispatch({
            type: ActionType.ADDED_EDUCATION_TYPE,
            payload: e.target.value,
          })
        }
      >
        {educationTypes.map((res) => (
          <option key={res.key}>{res.value}</option>
        ))}
      </select>
    </>
  );
};
