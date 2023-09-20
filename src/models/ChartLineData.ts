export interface ChartLineData {
  data: {
    xValues: string[];
    series: ChartLineSeries[];
    xValueNames?: string[];
  };
  x: string;
  y: string;
  title: string;
  subTitle?: string;
  infoText?: string;
  meta?: {
    numberOfReferenceLines?: number;
    percentage?: boolean;
    hideXAxis?: boolean;
    valueLabels?: boolean;
    labelProperties?: {
      significantDigits?: number;
      shortHand?: boolean;
    };
  };
}

export interface ChartLineSeries {
  yValues: number[];
  title: string;
  colorToken?: string;
}
