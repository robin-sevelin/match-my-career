import { useContext } from 'react';
import { OccupationView } from './OccupationView';
import { SearchContext } from '../contexts/SearchContext';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { useNavigate } from 'react-router-dom';

export const OccupationsList = () => {
  const { search } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <div className='occupations-container'>
      <div className='occupation-header'>
        <h3>
          Relaterad yrken till
          <span style={{ fontWeight: 'bold' }}>
            {' '}
            {search.educations[0].education.title[0].content}
          </span>
        </h3>
      </div>
      {search.occupations.map((occupation) => (
        <div key={occupation.id}>
          <OccupationView occupation={occupation} />
        </div>
      ))}
      <div className='navigate-container'>
        <DigiButton onAfOnClick={() => navigate('/search')}>
          Tillbaka
        </DigiButton>
      </div>
    </div>
  );
};
