import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { Link } from 'react-router-dom';
import { DigiBarChart } from '@digi/arbetsformedlingen-react';
import { useGraphData } from '../hooks/useGraphData';

export const EnrichedOccupations = () => {
  const { search } = useContext(SearchContext);
  const { chartData } = useGraphData(search);

  return (
    <>
      <div className='chart-container'>
        <DigiBarChart className='chart' afChartData={chartData}></DigiBarChart>
      </div>
      <button>
        <Link to={'/search'}>Tillbaka</Link>
      </button>
    </>
  );
};
