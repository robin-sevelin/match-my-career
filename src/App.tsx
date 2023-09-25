import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useReducer, useState } from 'react';
import { SearchReducer } from './reducers/SearchReducer';
import { SearchContext } from './contexts/SearchContext';
import { Search } from './models/Search';
import { useGetSearch } from './hooks/useGetSearch';
import {
  aboutEducationBaseValues,
  enchrichedOccupationBaseValues,
} from './models/initialValues';

function App() {
  const [emptySearch, setEmptySearch] = useState<Search>(
    new Search(
      '',
      [],
      [],
      enchrichedOccupationBaseValues,
      aboutEducationBaseValues
    )
  );

  const [search, dispatch] = useReducer(SearchReducer, emptySearch);

  useGetSearch(search, setEmptySearch);
  return (
    <>
      <SearchContext.Provider value={{ search, dispatch }}>
        <RouterProvider router={router} />
      </SearchContext.Provider>
    </>
  );
}

export default App;
