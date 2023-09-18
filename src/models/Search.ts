import { IEducation } from './IEducation';
import { IOccupation } from './IRelatedOccupations';

export class Search {
  constructor(
    public searchText: string,
    public educations: IEducation[],
    public occupations: IOccupation[]
  ) {}
}
