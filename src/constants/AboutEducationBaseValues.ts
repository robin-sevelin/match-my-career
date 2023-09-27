import { IAboutEducation } from '../models/IAboutEducation';

export const ABOUT_EDUCATION_BASE_VALUES: IAboutEducation = {
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
};
