export interface IEducation {
  education: {
    code: string;
    configuration: {
      code: string;
      type: string;
    };
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
  };
}

export interface ISubject {
  code: string;
  name: string;
  type: string;
}

[
  {
    code: '388',
    name: 'Religionsvetenskap och teologi',
    nameEn: 'Religious Studies',
    type: 'UOH',
  },
];
