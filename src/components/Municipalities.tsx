import { useContext, ChangeEvent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SearchContext } from '../contexts/SearchContext';
import { IFormValueLoader } from '../loaders/educationLoader';
import { ActionType } from '../reducers/SearchReducer';

export const Municipalities = () => {
  const { dispatch } = useContext(SearchContext);
  const { municipalities } = useLoaderData() as IFormValueLoader;

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
        {municipalities.map((res) => (
          <option key={res.key}>{res.value}</option>
        ))}
      </select>
    </>
  );
};
