import { useContext } from 'react';
import { ResultCardContainer } from './ResultCardContainer';
import { SearchContext } from '../contexts/SearchContext';
import { useGetEducations } from '../hooks/useGetEducations';
import { ShowLoader } from './ShowLoader';

export const ResultContainer = () => {
  const { search } = useContext(SearchContext);
  const { educations } = useGetEducations(search);

  return (
    <>
      <div className='result'>
        {educations ? (
          <ResultCardContainer educations={educations} />
        ) : (
          <ShowLoader></ShowLoader>
        )}
      </div>
    </>
  );
};
