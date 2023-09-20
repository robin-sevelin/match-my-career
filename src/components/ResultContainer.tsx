import { useContext } from 'react';
import { OccupationsList } from './OccupationsList';
import { ResultCardContainer } from './ResultCardContainer';
import { SearchContext } from '../contexts/SearchContext';
import { useState } from 'react';
import { IEducation } from '../models/IEducation';
import { AboutEducationView } from './AboutEducationView';

export const ResultContainer = () => {
  const { search } = useContext(SearchContext);
  const [selectedEducation, setSelectedEducation] = useState<IEducation | null>(
    null
  );

  return (
    <>
      {search.educations === null ? (
        <h2>Sökningen gav inget resultat</h2>
      ) : (
        <div className='result'>
          <ResultCardContainer
            selectedEducation={selectedEducation}
            setSelectedEducation={setSelectedEducation}
          />
          <AboutEducationView education={selectedEducation} />
          <OccupationsList />
        </div>
      )}
    </>
  );
};
