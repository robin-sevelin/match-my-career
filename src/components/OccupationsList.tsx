import { useContext } from 'react';
import { OccupationView } from './OccupationView';
import { SearchContext } from '../contexts/SearchContext';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { useNavigate } from 'react-router-dom';
import { ShowLoader } from './ShowLoader';
import { useGetOccupations } from '../hooks/useGetOccupations';
import { NoResult } from './NoResult';
import { ButtonVariation } from '@digi/arbetsformedlingen';

export const OccupationsList = () => {
  const { search } = useContext(SearchContext);
  const navigate = useNavigate();
  const { occupations, isLoading } = useGetOccupations(search);

  if(isLoading) {
    return (
      <>
        <ShowLoader></ShowLoader>
      </>
    )
  }

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
        <NoResult heading='Utbildningen saknar relaterade yrken' message='Testa sök efter en annan utbildning'></NoResult>
      )}
      <div className='navigate-container'>
        <DigiButton
          afVariation={ButtonVariation.SECONDARY}
          afFullWidth={false}
          onAfOnClick={() => navigate('/search')}
        >
          Tillbaka
        </DigiButton>
      </div>
    </div>
  );
};
