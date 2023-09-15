import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { IEducaton } from './models/IEducation';
import { useReducer, useState } from 'react';
import { getEducationForms, getEducationTypes } from './services/DataService';
import { useGetEducationData } from './hooks/useGetEducationData';
import { EducationContext } from './contexts/EducationContext';
import { SearchReducer } from './reducers/SearchReducer';
import { SearchContext } from './contexts/SearchContext';
import { Search } from './models/Search';
import { useLocalStorage } from './hooks/useStorage';
import { useGetSearch } from './hooks/useGetSearch';

function App() {
  const [storedSearch, setStoredSearch] = useLocalStorage<Search>(
    'search',
    new Search('', '', '')
  );
  const [educationType, setEducationType] = useState<IEducaton[]>([]);
  const [educationForm, setEducationForm] = useState<IEducaton[]>([]);
  const [search, dispatch] = useReducer(SearchReducer, storedSearch);

  const getData = async () => {
    setEducationType(await getEducationTypes());
    setEducationForm(await getEducationForms());
  };

  useGetSearch(search, setStoredSearch);
  useGetEducationData(educationForm, educationType, getData);
  return (
    <>
      <EducationContext.Provider value={{ educationForm, educationType }}>
        <SearchContext.Provider value={{ search, dispatch }}>
          <RouterProvider router={router} />
        </SearchContext.Provider>
      </EducationContext.Provider>
    </>
  );
}

export default App;
