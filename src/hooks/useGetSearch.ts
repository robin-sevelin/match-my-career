import { useEffect } from 'react';
import { Search } from '../models/Search';

export const useGetSearch = (
  search: Search,
  setSearch: (search: Search) => void
) => {
  useEffect(() => {
    if (search) {
      setSearch(search);
    }
  });
};
