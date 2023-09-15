import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { IEducaton } from './models/IEducation';
import { useState } from 'react';
import { getEducationForms, getEducationTypes } from './services/DataService';
import { useGetEducationData } from './hooks/useGetEducationData';
import { EducationContext } from './contexts/EducationContext';

function App() {
  const [educationType, setEducationType] = useState<IEducaton[]>([]);
  const [educationForm, setEducationForm] = useState<IEducaton[]>([]);

  const getData = async () => {
    setEducationType(await getEducationTypes());
    setEducationForm(await getEducationForms());
  };

  useGetEducationData(educationForm, educationType, getData);
  return (
    <>
      <EducationContext.Provider value={{ educationForm, educationType }}>
        <RouterProvider router={router} />
      </EducationContext.Provider>
    </>
  );
}

export default App;
