import { useContext, useEffect, useState } from 'react';
import { IOccupation } from '../models/IRelatedOccupations';
import {
  getEnrichedOccupations,
  postMatchByText,
} from '../services/DataService';
import { OccupationView } from './OccupationView';
import { SearchContext } from '../contexts/SearchContext';
import { ActionType } from '../reducers/SearchReducer';

export const OccupationsList = () => {
  const { dispatch } = useContext(SearchContext);
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

    dispatch({
      type: ActionType.ADDED_OCCUPATIONS,
      payload: JSON.stringify(response),
    });
  };

  return (
    <>
      {occupations.map((occupation) => (
        <div key={occupation.id}>
          <OccupationView occupation={occupation} onHandleClick={handleClick} />
        </div>
      ))}
    </>
  );
};
