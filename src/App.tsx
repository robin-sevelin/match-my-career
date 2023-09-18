import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useReducer } from 'react';
import { SearchReducer } from './reducers/SearchReducer';
import { SearchContext } from './contexts/SearchContext';
import { Search } from './models/Search';
import { useLocalStorage } from './hooks/useStorage';
import { useGetSearch } from './hooks/useGetSearch';

function App() {
  const [storedSearch, setStoredSearch] = useLocalStorage<Search>(
    'search',
    new Search('', [])
  );

  const [search, dispatch] = useReducer(SearchReducer, storedSearch);

  useGetSearch(search, setStoredSearch);
  return (
    <>
      <SearchContext.Provider value={{ search, dispatch }}>
        <RouterProvider router={router} />
      </SearchContext.Provider>
    </>
  );
}

export default App;
