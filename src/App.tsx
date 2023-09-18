import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useReducer } from 'react';
import { SearchReducer } from './reducers/SearchReducer';
import { SearchContext } from './contexts/SearchContext';
import { Search } from './models/Search';
import { useLocalStorage } from './hooks/useStorage';
import { useGetSearch } from './hooks/useGetSearch';
import { ResultContext } from './contexts/ResultContext';
import { Result } from './models/Result';
import { useGetResult } from './hooks/useGetResult';

function App() {
  const [storedSearch, setStoredSearch] = useLocalStorage<Search>(
    'search',
    new Search('', '', '', '')
  );
  const [storedResult, setStoredResult] = useLocalStorage<Result>(
    'result',
    new Result('')
  );
  const [search, dispatch] = useReducer(SearchReducer, storedSearch);

  useGetSearch(search, setStoredSearch);
  useGetResult(storedResult, setStoredResult);
  return (
    <>
      <ResultContext.Provider value={{}}>
        <SearchContext.Provider value={{ search, dispatch }}>
          <RouterProvider router={router} />
        </SearchContext.Provider>
      </ResultContext.Provider>
    </>
  );
}

export default App;
