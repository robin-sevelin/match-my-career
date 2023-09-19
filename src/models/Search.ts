import { IEducation } from './IEducation';
import { ICompetencies } from './IEnrichedOccupation';
import { IOccupation } from './IRelatedOccupations';

export class Search {
  constructor(
    public searchText: string,
    public educations: IEducation[],
    public occupations: IOccupation[],
    public competencies: ICompetencies[]
  ) {}
}
