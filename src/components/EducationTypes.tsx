import { useEffect, useState } from 'react';
import { IEducaton } from '../models/IEducation';
import { getEducationTypes } from '../services/DataService';
import { DigiFormSelect } from '@digi/arbetsformedlingen-react';
import {
  FormSelectValidation,
  FormSelectVariation,
} from '@digi/arbetsformedlingen';

export const EducationTypes = () => {
  const [result, setResult] = useState<IEducaton[]>([]);

  useEffect(() => {
    if (result.length === 0) {
      getData();
    }
  });

  const getData = async () => {
    setResult(await getEducationTypes());
  };
  return (
    <>
      <DigiFormSelect
        afLabel='Utbildningstyp'
        afVariation={FormSelectVariation.MEDIUM}
        afValidation={FormSelectValidation.NEUTRAL}
        afPlaceholder='Utbildningstyp'
      >
        {result.map((res) => (
          <option key={res.key} value={res.key}>
            {res.value}
          </option>
        ))}
      </DigiFormSelect>
    </>
  );
};
