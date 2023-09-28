import { IEnrichedOccupation } from '../models/IEnrichedOccupation';

export const ENRICHED_OCCUPATION_BASE_VALUES: IEnrichedOccupation = {
  id: '',
  occupation_label: '',
  metadata: {
    enriched_candidates_term_frequency: {
      competencies: [
        {
          term: '',
          percent_for_occupation: 0,
          traits: [{ term: '', percent_for_occupation: 0 }],
        },
      ],
    },
  },
};
