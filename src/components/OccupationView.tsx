import { useContext } from 'react';
import { IOccupation } from '../models/IRelatedOccupations';
import { getEnrichedOccupations } from '../services/DataService';
import { SearchContext } from '../contexts/SearchContext';
import { ActionType } from '../reducers/SearchReducer';
import { Link } from 'react-router-dom';
import { DigiButton, DigiTypography } from '@digi/arbetsformedlingen-react';

interface IOccupationViewProps {
  occupation: IOccupation;
}

export const OccupationView = ({ occupation }: IOccupationViewProps) => {
  const { dispatch } = useContext(SearchContext);
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
        <DigiTypography>
          <p>{occupation.occupation_label}</p>
        </DigiTypography>
        <DigiButton>
          <Link to={'/skillchart'}>Kompetenser</Link>
        </DigiButton>
      </div>
    </>
  );
};
