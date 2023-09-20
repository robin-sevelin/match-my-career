export interface IEducation {
  id: string;
  education: {
    code: string;
    configuration: {
      code: string;
      type: string;
    };
    description:[
      { lang: string, 
        content: string 
      }],
    identifier: string;
    title: [
      {
        lang: string;
        content: string;
      }
    ];
    subject: ISubject[];
    form: {
      code: string;
      type: string;
    };
  }
  education_providers: [
    {
      identifier: string;
      expires: string;
      responsibleBody: [
        {
          lang: string;
          content: string;
        }
      ];
      emailAddress: string;
      phone: [
        {
          number: string;
        }
      ];
      name: [
        {
          lang: string;
          content: string;
        }
      ];
      urls: [
        {
          lang: string,
          content: string,
        }
      ]
    }
  ];
  events: [{
    execution: {
      start: string,
      end: string,
    },
    paceOfStudyPercentage: number,
    urls: [{
      content: string
    }];
    provider: string,
  }]
}

export interface ISubject {
  subject: [
    {
      code: string;
      name: string;
      type: string;
    }
  ];
}