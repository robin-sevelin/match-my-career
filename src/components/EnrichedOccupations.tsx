import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

export const EnrichedOccupations = () => {
  const { search } = useContext(SearchContext);

  const newArray = [];

  for (let i = 0; i < 10; i++) {
    newArray.push(
      search.enchrichedOccupation.metadata.enriched_candidates_term_frequency
        .competencies[i]
    );
  }

  return (
    <div className='competencies'>
      <h4>kompetenser för {search.enchrichedOccupation.occupation_label}</h4>
      {newArray.map((item, index) => (
        <div key={index}>{item.term}</div>
      ))}
    </div>
  );
};
