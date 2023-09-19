import { useContext } from 'react';

import { OccupationView } from './OccupationView';
import { SearchContext } from '../contexts/SearchContext';

export const OccupationsList = () => {
  const { search } = useContext(SearchContext);

  return (
    <div className='occupations-container'>
      {search.occupations.map((occupation) => (
        <div key={occupation.id}>
          <OccupationView occupation={occupation} />
        </div>
      ))}
    </div>
  );
};
