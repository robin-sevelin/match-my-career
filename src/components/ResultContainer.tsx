import { useContext } from 'react';
import { ResultCardContainer } from './ResultCardContainer';
import { SearchContext } from '../contexts/SearchContext';
import { useGetEducations } from '../hooks/useGetEducations';
import { ShowLoader } from './ShowLoader';
import { NoResult } from './NoResult';

export const ResultContainer = () => {
  const { search } = useContext(SearchContext);
  const { educations, isLoading } = useGetEducations(search);

  if(isLoading) {
    return (
      <>
        <ShowLoader></ShowLoader>
      </>
    )
  }

  return (
    <>
      <div className='result'>
        {educations && educations.length > 0 ? (
          <ResultCardContainer educations={educations}></ResultCardContainer>
        ) : (
          <NoResult heading='Din sökning gav inget reslutat' message='Testa sök efter ett annat yrke'></NoResult>
        )}
      </div>
    </>
  );
};
