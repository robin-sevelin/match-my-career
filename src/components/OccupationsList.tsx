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
          Relaterade yrken till
          <span style={{ fontWeight: 'bold' }}>
            {' '}
            {search.educations[0].education.title[0].content}
          </span>{' '}
        </h3>
        <p style={{ marginTop: '1rem' }}>
          {search.educations[0].education.form.code},{' '}
          {search.educations[0].education_plan.program_code}
        </p>
      </div>
      {search.occupations.length !== 0 ? (
        search.occupations.map((occupation) => (
          <div key={occupation.id}>
            <OccupationView occupation={occupation} />
          </div>
        ))
      ) : (
        <p>Hittade tyvärr inget matchande yrke</p>
      )}

      <div className='navigate-container'>
        <DigiButton onAfOnClick={() => navigate('/search')}>
          Tillbaka
        </DigiButton>
      </div>
    </div>
  );
};
