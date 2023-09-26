import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import { DigiBarChart, DigiButton } from '@digi/arbetsformedlingen-react';

import { useGetEnrichedOccupations } from '../hooks/useGetEnrichedOccupations';
import { ShowLoader } from './ShowLoader';
import { useGetGraphData } from '../hooks/useGetGraphData';

export const EnrichedOccupations = () => {
  const { search } = useContext(SearchContext);
  const { occupation } = useGetEnrichedOccupations(search);
  const { chart } = useGetGraphData(occupation);
  const navigate = useNavigate();

  return (
    <div className='chart-container'>
      {chart ? (
        <DigiBarChart afChartData={chart}></DigiBarChart>
      ) : (
        <ShowLoader></ShowLoader>
      )}

      <div className='navigate-container'>
        <DigiButton
          afVariation='secondary'
          onAfOnClick={() => navigate('/occupations')}
        >
          Tillbaka
        </DigiButton>
      </div>
    </div>
  );
};
