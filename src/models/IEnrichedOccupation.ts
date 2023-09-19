export interface IEnrichedOccupation {
  id: string;
  occupationLabel: string;
  metadata: {
    competencies: ICompetencies[];
  };
}

export interface ICompetencies {
  term: string;
  percent_for_occupation: string;
}
