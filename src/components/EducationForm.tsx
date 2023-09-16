import { DigiFormSelect } from '@digi/arbetsformedlingen-react';
import {
  FormSelectValidation,
  FormSelectVariation,
} from '@digi/arbetsformedlingen';
import { useLoaderData } from 'react-router-dom';
import { IEducationLoader } from '../loaders/educationLoader';

export const EducationForm = () => {
  const { educationForms } = useLoaderData() as IEducationLoader;

  return (
    <>
      <DigiFormSelect
        afLabel='Utbildningsform'
        afVariation={FormSelectVariation.MEDIUM}
        afValidation={FormSelectValidation.NEUTRAL}
        afPlaceholder='Utbildningsform'
      >
        {educationForms.map((res) => (
          <option key={res.key} value={res.key}>
            {res.value}
          </option>
        ))}
      </DigiFormSelect>
    </>
  );
};
