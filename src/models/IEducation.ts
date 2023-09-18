export interface IEducation {
  education: {
    identifier: string;
  };
  title: ITitle[];
  subject: ISubject[];
}

export interface ITitle {
  content: string;
}

export interface ISubject {
  subject: string;
}
