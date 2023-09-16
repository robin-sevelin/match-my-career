import { useLoaderData } from 'react-router-dom';
import { IEducationLoader } from '../loaders/educationLoader';
import { SearchContext } from '../contexts/SearchContext';
import { ChangeEvent, useContext } from 'react';
import { ActionType } from '../reducers/SearchReducer';

export const EducationForm = () => {
  const { educationForms } = useLoaderData() as IEducationLoader;
  const { dispatch } = useContext(SearchContext);

  return (
    <>
      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          dispatch({
            type: ActionType.ADDED_EDUCATION_FORM,
            payload: e.target.value,
          })
        }
      >
        {educationForms.map((res) => (
          <option key={res.key}>{res.value}</option>
        ))}
      </select>
    </>
  );
};
