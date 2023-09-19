import { IOccupation } from '../models/IRelatedOccupations';

interface IOccupationViewProps {
  occupation: IOccupation;
}

export const OccupationView = ({ occupation }: IOccupationViewProps) => {
  return <div className='occupation-card'>{occupation.occupation_label}</div>;
};
