import { DigiButton } from '@digi/arbetsformedlingen-react';
import { IOccupation } from '../models/IRelatedOccupations';

interface IOccupationViewProps {
  occupation: IOccupation;
  onHandleClick: (id: string) => void;
}

export const OccupationView = ({
  occupation,
  onHandleClick,
}: IOccupationViewProps) => {
  const handleClick = (id: string) => {
    onHandleClick(id);
  };

  return (
    <div className='occupation-card'>
      {occupation.occupation_label}
      <DigiButton onClick={() => handleClick(occupation.id)}>
        Kompetenser
      </DigiButton>
    </div>
  );
};
