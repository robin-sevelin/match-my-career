import { IAboutEducation } from './IAboutEducation';
import { IEnrichedOccupation } from './IEnrichedOccupation';

export const enchrichedOccupationBaseValues: IEnrichedOccupation = {
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

export const aboutEducationBaseValues: IAboutEducation = {
  id: '',
  education: {
    title: [
      {
        content: '',
        lang: '',
      },
    ],
    code: '',
    form: {
      code: '',
    },
    description: [
      {
        content: '',
      },
    ],
  },
  education_providers: [
    {
      urls: [
        {
          content: '',
        },
      ],
      name: [
        {
          content: '',
        },
      ],
    },
  ],
  events: [
    {
      execution: {
        start: '',
        end: '',
      },
      paceOfStudyPercentage: 0,
      urls: [
        {
          content: '',
        },
      ],
      provider: '',
    },
  ],
};
