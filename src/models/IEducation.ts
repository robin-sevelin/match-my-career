export interface IEducation {
  id: string;
  education: {
    code: string;
    configuration: {
      code: string;
      type: string;
    };
    identifier: string;
    title: ITitle[];
    subject: ISubject[];
    form: {
      code: string;
      type: string;
    };
    description: [
      {
        lang: string;
        content: string;
      }
    ];
  };
  education_plan: { program_code: string };
  text_enrichments_results: {
    enriched_candidates: {
      competencies: string[];
      occupations: string[];
      traits: string[];

      subject: ISubject[];
      form: {
        code: string;
        type: string;
      };
    };
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

  eventSummary: {
    paceOfStudyPercentage: number[];
  };
  providerSummary: {
    providers: string[]
  };

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
