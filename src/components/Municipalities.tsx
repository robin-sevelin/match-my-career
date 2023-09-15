import { useState } from 'react';
import { IEducaton } from '../models/IEducation';
import { getmMunicipalities } from '../services/DataService';

export const Municipalities = () => {
  const [result, setResult] = useState<IEducaton[]>([]);
  const handleClick = async () => {
    const response = await getmMunicipalities();

    setResult(response);
  };
  return (
    <>
      <button onClick={handleClick}>sök</button>
      {result.map((res) => (
        <div key={res.key}>{res.value}</div>
      ))}
    </>
  );
};
