import { useContext, useState } from 'react';
import { IOccupation } from '../models/IRelatedOccupations';
import { getEnrichedOccupations } from '../services/DataService';
import { SearchContext } from '../contexts/SearchContext';
import { ActionType } from '../reducers/SearchReducer';
import { EnrichedOccupations } from './EnrichedOccupations';

interface IOccupationViewProps {
  occupation: IOccupation;
}

export const OccupationView = ({ occupation }: IOccupationViewProps) => {
  const { dispatch } = useContext(SearchContext);
  const [showCompetencies, setShowCompentencies] = useState(false);
  const handleClick = async (occupation: IOccupation) => {
    const response = await getEnrichedOccupations(occupation.id);

    dispatch({
      type: ActionType.ADDED_ENRICHED_OCCUPATIONS,
      payload: JSON.stringify(response),
    });
  };

  return (
    <>
      <div className='occupation-card' onClick={() => handleClick(occupation)}>
        {occupation.occupation_label}
        <button
          onClick={() =>
            setShowCompentencies((showCompetencies) => !showCompetencies)
          }
        >
          Kompetenser
        </button>
        {showCompetencies && <EnrichedOccupations />}
      </div>
    </>
  );
};
