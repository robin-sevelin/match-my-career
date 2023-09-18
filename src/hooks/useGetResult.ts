import { useEffect } from 'react';
import { Result } from '../models/Result';

export const useGetResult = (
  result: Result,
  setResult: (result: Result) => void
) => {
  useEffect(() => {
    if (result) {
      setResult(result);
    }
  });
};
