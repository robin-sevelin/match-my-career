export interface IEducation {
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
