import { useLoaderData } from 'react-router-dom';
import { IEducationLoader } from '../loaders/educationLoader';
import { ChangeEvent, useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { ActionType } from '../reducers/SearchReducer';

export const EducationTypes = () => {
  const { dispatch } = useContext(SearchContext);
  const { educationTypes } = useLoaderData() as IEducationLoader;

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
