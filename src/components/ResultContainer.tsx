import { useContext } from 'react';
import { ResultCardContainer } from './ResultCardContainer';
import { SearchContext } from '../contexts/SearchContext';
import { DigiTypographyHeadingJumbo } from '@digi/arbetsformedlingen-react';
import { TypographyHeadingJumboLevel } from '@digi/arbetsformedlingen';
import { useGetEducations } from '../hooks/useGetEducations';

export const ResultContainer = () => {
  const { search } = useContext(SearchContext);
  const { educations } = useGetEducations(search);

  return (
    <>
      {educations === null ? (
        <DigiTypographyHeadingJumbo
          af-Level={TypographyHeadingJumboLevel.H4}
          afText='Sökningen gav inget resultat'
        ></DigiTypographyHeadingJumbo>
      ) : (
        <div className='result'>
          <ResultCardContainer educations={educations} />
        </div>
      )}
    </>
  );
};
