import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

export const EnrichedOccupations = () => {
  const { search } = useContext(SearchContext);

  if (search.competencies) {
    console.log(search.competencies);
  }

  return <div className='competencies'></div>;
};
