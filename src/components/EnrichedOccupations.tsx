import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import { DigiBarChart, DigiButton } from '@digi/arbetsformedlingen-react';
import { useGraphData } from '../hooks/useGraphData';

export const EnrichedOccupations = () => {
  const { search } = useContext(SearchContext);
  const { chartData } = useGraphData(search);
  const navigate = useNavigate();

  return (
    <div className='chart-container'>
      <DigiBarChart afChartData={chartData}></DigiBarChart>
      <div className='navigate-container'>
        <DigiButton onAfOnClick={() => navigate('/occupations')}>
          Tillbaka
        </DigiButton>
      </div>
    </div>
  );
};
