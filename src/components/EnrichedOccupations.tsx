import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { Link } from 'react-router-dom';

export const EnrichedOccupations = () => {
  const { search } = useContext(SearchContext);

  const newArray = [];

  for (let i = 0; i < 20; i++) {
    newArray.push(
      search.enchrichedOccupation.metadata.enriched_candidates_term_frequency
        .competencies[i]
    );
  }

  return (
    <>
      <div className='competencies'>
        <h2>{search.enchrichedOccupation.occupation_label}</h2>
        <h3>Passande kompetenser</h3>
        {newArray.map((item, index) => (
          <div key={index}>{item.term}</div>
        ))}
      </div>
      <button>
        <Link to={'/search'}>Tillbaka</Link>
      </button>
    </>
  );
};
