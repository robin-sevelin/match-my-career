export interface IEducation {
  education: {
    identifier: string;
    title: ITitle[];
    subject: ISubject[];
  };
}

export interface ITitle {
  title: [
    {
      lang: string;
      content: string;
    }
  ];
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
