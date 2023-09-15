import { useContext } from 'react';

import { DigiFormSelect } from '@digi/arbetsformedlingen-react';
import {
  FormSelectValidation,
  FormSelectVariation,
} from '@digi/arbetsformedlingen';
import { EducationContext } from '../contexts/EducationContext';

export const EducationTypes = () => {
  const { educationType } = useContext(EducationContext);
  return (
    <>
      <DigiFormSelect
        afLabel='Utbildningstyp'
        afVariation={FormSelectVariation.MEDIUM}
        afValidation={FormSelectValidation.NEUTRAL}
        afPlaceholder='Utbildningstyp'
      >
        {educationType.map((res) => (
          <option key={res.key} value={res.key}>
            {res.value}
          </option>
        ))}
      </DigiFormSelect>
    </>
  );
};
