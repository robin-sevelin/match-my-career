import { useState } from 'react';
import { IEducaton } from '../models/IEducation';
import { getEducationForms } from '../services/DataService';

export const EducationForm = () => {
  const [result, setResult] = useState<IEducaton[]>([]);
  const handleClick = async () => {
    const response = await getEducationForms();

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
