import { ChartLineSeries, ChartLineData } from '@digi/arbetsformedlingen';

import { IEnrichedOccupation } from '../models/IEnrichedOccupation';
import { useEffect, useState } from 'react';

export const useGetGraphData = (occupations: IEnrichedOccupation) => {
  const [chart, setChart] = useState<ChartLineData>();

  useEffect(() => {
    if (occupations.id !== '') {
      const data = setGraphData(occupations);
      setChart(data);
    }
  }, [occupations]);

  return { chart } as const;
};

const setGraphData = (occupations: IEnrichedOccupation) => {
  const competencies: string[] = [];
  const percent: number[] = [];

  console.log('yrken', occupations);

  for (let i = 0; i < 10; i++) {
    competencies.push(
      occupations.metadata.enriched_candidates_term_frequency.competencies[i]
        .term
    );
    percent.push(
      occupations.metadata.enriched_candidates_term_frequency.competencies[i]
        .percent_for_occupation
    );
  }

  const charline: ChartLineSeries[] = [
    {
      yValues: percent,
      title: 'Efterfrågad procentandel',
    },
  ];

  const chartData: ChartLineData = {
    data: {
      xValues: percent,
      series: charline,
      xValueNames: competencies,
    },
    x: 'Kompetens',
    y: 'Procent andel som yrket efterfrågar',
    title:
      'Procent andelar över dom högst efterfrågade kompetenserna för ' +
      occupations.occupation_label,

    meta: {
      numberOfReferenceLines: 2,
      percentage: true,
      hideXAxis: false,
      valueLabels: true,
      labelProperties: {
        significantDigits: 2,
        shortHand: false,
      },
    },
  };

  return chartData;
};
