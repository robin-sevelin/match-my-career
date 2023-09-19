export interface IEducation {
  id: string,
  education: {
    code: string;
    configuration: {
      code: string, 
      type: string,
    }
    identifier: string;
    title: [
      {
        lang: string,
        content: string
      }
    ];
    subject: ISubject[];
    form: {
      code: string,
      type: string,
    };
    description: {
      lang: string,
      content: string,
    };
  };
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