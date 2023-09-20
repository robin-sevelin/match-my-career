export interface IEnrichedOccupation {
  id: string;
  occupation_label: string;
  metadata: {
    enriched_candidates_term_frequency: {
      competencies: ICompetencies[];
    };
  };
}

export interface ICompetencies {
  term: string;
  percent_for_occupation: number;
  traits: ITrait[];
}

export interface ITrait {
  term: string;
  percent_for_occupation: string;
}
