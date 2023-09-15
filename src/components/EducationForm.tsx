import { useContext } from 'react';
import { DigiFormSelect } from '@digi/arbetsformedlingen-react';
import {
  FormSelectValidation,
  FormSelectVariation,
} from '@digi/arbetsformedlingen';
import { EducationContext } from '../contexts/EducationContext';

export const EducationForm = () => {
  const { educationForm } = useContext(EducationContext);

  return (
    <>
      <DigiFormSelect
        afLabel='Utbildningsform'
        afVariation={FormSelectVariation.MEDIUM}
        afValidation={FormSelectValidation.NEUTRAL}
        afPlaceholder='Utbildningsform'
      >
        {educationForm.map((res) => (
          <option key={res.key} value={res.key}>
            {res.value}
          </option>
        ))}
      </DigiFormSelect>
    </>
  );
};
