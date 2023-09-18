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
    <>
      {occupation.occupation_label}
      <button onClick={() => handleClick(occupation.id)}>Kompetenser</button>
    </>
  );
};
