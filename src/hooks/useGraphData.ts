import { ChartLineSeries, ChartLineData } from '@digi/arbetsformedlingen';
import { Search } from '../models/Search';

export const useGraphData = (search: Search) => {
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
    {
      yValues: percent,
      title: 'Efterfrågad procentandel',
      colorToken: '--digi--global--color--cta--green--base',
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
      search.enchrichedOccupation.occupation_label,

    meta: {
      numberOfReferenceLines: 2,
      percentage: true,
      hideXAxis: false,
      valueLabels: true,
      labelProperties: {
        significantDigits: 2,
        shortHand: true,
      },
    },
  };

  return { chartData } as const;
};
