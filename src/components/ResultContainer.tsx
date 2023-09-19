import { useContext } from 'react';
import { OccupationsList } from './OccupationsList';
import { ResultCardContainer } from './ResultCardContainer';
import { SearchContext } from '../contexts/SearchContext';

export const ResultContainer = () => {
  const { search } = useContext(SearchContext);

  return (
    <>
      {search.educations === null ? (
        <h2>Sökningen gav inget resultat</h2>
      ) : (
        <div className='result'>
          <ResultCardContainer />
          <OccupationsList />
        </div>
      )}
    </>
  );
};
