import { IEducation } from './IEducation';

export class Search {
  constructor(public searchText: string, public educations: IEducation[]) {}
}
