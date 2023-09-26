export interface IAboutEducation {
  id: string;
  education: {
    title: ITitle[];
    code: string;
    form: {
      code: string;
    };
    description: [
      {
        content: string;
      }
    ];
  };
  education_providers: [
    {
      urls: [
        {
          content: string;
        }
      ];
      name: [
        {
          content: string;
        }
      ];
    }
  ];
  events: [
    {
      execution: {
        start: string;
        end: string;
      };
      paceOfStudyPercentage: number;
      urls: [
        {
          content: string;
        }
      ];
      provider: string;
    }
  ];
}

export interface ISubject {
  code: string;
  name: string;
  type: string;
}

export interface ITitle {
  lang: string;
  content: string;
}
