import { useContext } from 'react';
import { OccupationView } from './OccupationView';
import { SearchContext } from '../contexts/SearchContext';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { useNavigate } from 'react-router-dom';

import { ShowLoader } from './ShowLoader';
import { useGetOccupations } from '../hooks/useGetOccupations';

export const OccupationsList = () => {
  const { search } = useContext(SearchContext);
  const navigate = useNavigate();
  const { occupations } = useGetOccupations(search);

  return (
    <div className='occupations-container'>
      <div className='occupation-header'>
        <h3>
          Relaterade yrken till
          <span style={{ fontWeight: 'bold' }}>
            {' '}
            {search.educations[0].education.title[0].content}
          </span>{' '}
        </h3>
        <p style={{ marginTop: '1rem' }}>
          {search.educations[0].education.form.code}
        </p>
      </div>
      {occupations.length !== 0 ? (
        occupations.map((occupation) => (
          <div key={occupation.id}>
            <OccupationView occupation={occupation} />
          </div>
        ))
      ) : (
        <ShowLoader></ShowLoader>
      )}

      <div className='navigate-container'>
        <DigiButton
          afVariation='secondary'
          onAfOnClick={() => navigate('/search')}
        >
          Tillbaka
        </DigiButton>
      </div>
    </div>
  );
};
