import { useEffect, useState } from 'react';
import { IEducaton } from '../models/IEducation';
import { getEducationForms } from '../services/DataService';
import { DigiFormSelect } from '@digi/arbetsformedlingen-react';
import {
  FormSelectValidation,
  FormSelectVariation,
} from '@digi/arbetsformedlingen';

export const EducationForm = () => {
  const [result, setResult] = useState<IEducaton[]>([]);

  useEffect(() => {
    if (result.length === 0) {
      getData();
    }
  });

  const getData = async () => {
    setResult(await getEducationForms());
  };

  return (
    <>
      <DigiFormSelect
        afLabel='Utbildningsform'
        afVariation={FormSelectVariation.MEDIUM}
        afValidation={FormSelectValidation.NEUTRAL}
        afPlaceholder='Utbildningsform'
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
