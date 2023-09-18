import { FormEvent, useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { getEducations } from '../services/DataService';
import { ResultContainer } from './ResultContainer';
import { ActionType } from '../reducers/SearchReducer';
import { DigiButton, DigiFormInput } from '@digi/arbetsformedlingen-react';
import {
  ButtonVariation,
  FormInputType,
  FormInputValidation,
  FormInputVariation,
} from '@digi/arbetsformedlingen';
import { DigiFormInputCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

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
        <DigiFormInput
          onAfOnChange={(e: DigiFormInputCustomEvent<string>) =>
            dispatch({
              type: ActionType.ADDED_SEARCH_TEXT,
              payload: e.target.value as string,
            })
          }
          afLabel='jobb-titel'
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.SEARCH}
          afValidation={FormInputValidation.NEUTRAL}
        ></DigiFormInput>

        {/* <EducationForm />
        <EducationType />
        <Municipalities /> */}
        <DigiButton afVariation={ButtonVariation.PRIMARY}>Sök</DigiButton>
      </form>
      <ResultContainer />
    </>
  );
};
