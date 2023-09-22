import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { Link } from 'react-router-dom';
import { DigiBarChart, DigiButton } from '@digi/arbetsformedlingen-react';
import { useGraphData } from '../hooks/useGraphData';

export const EnrichedOccupations = () => {
  const { search } = useContext(SearchContext);
  const { chartData } = useGraphData(search);

  return (
    <>
      <DigiButton>
        <Link to={'/search'}>Tillbaka</Link>
      </DigiButton>

      <DigiBarChart afChartData={chartData}></DigiBarChart>
    </>
  );
};
