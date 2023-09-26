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
            {search.occupationsSearch.name}
          </span>{' '}
          <span>{search.occupationsSearch.code}</span>
        </h3>
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
