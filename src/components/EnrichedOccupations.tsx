import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { Link } from 'react-router-dom';
import { DigiBarChart, DigiButton } from '@digi/arbetsformedlingen-react';
import { ChartLineData } from '../models/ChartLineData';
import { ChartLineSeries } from '@digi/arbetsformedlingen';

export const EnrichedOccupations = () => {
  const { search } = useContext(SearchContext);

  const competencies = [];
  const percent = [];

  for (let i = 0; i < 10; i++) {
    competencies.push(
      search.enchrichedOccupation.metadata.enriched_candidates_term_frequency
        .competencies[i].term
    );
    percent.push(
      search.enchrichedOccupation.metadata.enriched_candidates_term_frequency
        .competencies[i].percent_for_occupation
    );
  }

  const charline: ChartLineSeries[] = [
    { yValues: percent, title: 'mitt diagram', colorToken: 'green' },
  ];

  const chartData: ChartLineData = {
    data: {
      xValues: competencies,
      series: charline,
      xValueNames: competencies,
    },
    x: 'procent',
    y: 'kompetens',
    title: 'kompetensediagram',
    infoText: 'inget',
    meta: {
      numberOfReferenceLines: 10,
      percentage: true,
      hideXAxis: false,
      valueLabels: true,
      labelProperties: {
        significantDigits: 10,
        shortHand: false,
      },
    },
  };

  return (
    <>
      <DigiButton>
        <Link to={'/search'}>Tillbaka</Link>
      </DigiButton>
      
      <DigiBarChart afChartData={chartData}></DigiBarChart>
    </>
  );
};
