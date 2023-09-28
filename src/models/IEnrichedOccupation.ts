export interface IEnrichedOccupation {
  id: string;
  occupation_label: string;
  metadata: {
    enriched_candidates_term_frequency: {
      competencies: [
        {
          term: string;
          percent_for_occupation: number;
          traits: [
            {
              term: string;
              percent_for_occupation: number;
            }
          ];
        }
      ];
    };
  };
}
