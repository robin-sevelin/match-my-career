import { FormEvent, useContext, useState } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { ResultContainer } from './ResultContainer';
import { ActionType } from '../reducers/SearchReducer';
import { DigiFormInputSearch } from '@digi/arbetsformedlingen-react';
import '../style/searchpage/_searchpage.scss';

export const Search = () => {
  const { dispatch } = useContext(SearchContext);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.ADDED_EDUCATIONS_SEARCH,
      payload: input,
    });
  };
  return (
    <>
      <section className='searchpage'>
        {' '}
        <form onSubmit={handleSubmit}>
          <DigiFormInputSearch
            value={input}
            afLabel='Jobbtitel'
            afButtonText='Sök'
            onAfOnChange={(e) => setInput(e.target.value)}
          ></DigiFormInputSearch>
        </form>
        <ResultContainer />
      </section>
    </>
  );
};
