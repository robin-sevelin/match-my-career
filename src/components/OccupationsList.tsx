import { useContext } from 'react';
import { OccupationView } from './OccupationView';
import { SearchContext } from '../contexts/SearchContext';
import { DigiLoaderSpinner } from '@digi/arbetsformedlingen-react';

export const OccupationsList = () => {
  const { search } = useContext(SearchContext);

  return (
    <div className='occupations-container'>
      {search.occupations ? (
        search.occupations.map((occupation) => (
          <div key={occupation.id}>
            <OccupationView occupation={occupation} />
          </div>
        ))
      ) : (
        <DigiLoaderSpinner></DigiLoaderSpinner>
      )}
    </div>
  );
};
