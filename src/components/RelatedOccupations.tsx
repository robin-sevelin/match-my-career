import { useEffect, useState } from 'react';
import { IOccupation } from '../models/IRelatedOccupation';
import {
  getEnrichedOccupations,
  postMatchByText,
} from '../services/DataService';

export const RelatedOccupations = () => {
  const [occupations, setOccupations] = useState<IOccupation[]>([]);
  const title: string = 'frontend';
  const education: string = 'systemutvecklare';
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await postMatchByText(title, education);
    setOccupations(response);
  };

  const handleClick = async (id: string) => {
    const response = await getEnrichedOccupations(id);

    console.log(response);
  };

  return (
    <>
      {occupations.map((occupation) => (
        <div key={occupation.id}>
          {occupation.occupation_label}
          <button onClick={() => handleClick(occupation.id)}>
            Klicka på mig
          </button>
        </div>
      ))}
    </>
  );
};
