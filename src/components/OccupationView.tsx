import { useContext } from 'react';
import { IOccupation } from '../models/IRelatedOccupations';
import { SearchContext } from '../contexts/SearchContext';

import {
  DigiButton,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from '@digi/arbetsformedlingen-react';
import { TypographyHeadingJumboLevel } from '@digi/arbetsformedlingen';
import { useNavigate } from 'react-router-dom';
import { ActionType } from '../types/ActionTypes';

interface IOccupationViewProps {
  occupation: IOccupation;
}

export const OccupationView = ({ occupation }: IOccupationViewProps) => {
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    dispatch({
      type: ActionType.ADDED_ENRICHED_OCCUPATIONS_SEARCH,
      payload: id,
    });

    navigate('/skillchart');
  };

  return (
    <>
      <div className='occupation-card'>
        <div className='title-container'>
          <DigiTypography>
            <DigiTypographyHeadingJumbo
              afText={occupation.occupation_label}
              afLevel={TypographyHeadingJumboLevel.H4}
            ></DigiTypographyHeadingJumbo>
          </DigiTypography>
        </div>
        <div className='button-container'>
          <DigiButton onAfOnClick={() => handleClick(occupation.id)}>
            Kompetenser
          </DigiButton>
        </div>
      </div>
    </>
  );
};
