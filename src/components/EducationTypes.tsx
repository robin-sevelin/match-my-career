import { useState } from 'react';
import { IEducaton } from '../models/IEducation';
import { getEducationTypes } from '../services/DataService';

export const EducationTypes = () => {
  const [result, setResult] = useState<IEducaton[]>([]);
  const handleClick = async () => {
    const response = await getEducationTypes();

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
