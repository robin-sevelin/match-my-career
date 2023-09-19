import { IEducation } from './IEducation';
import { IEnrichedOccupations } from './IEncrichedOccupations';
import { IOccupation } from './IRelatedOccupations';

export class Search {
  constructor(
    public searchText: string,
    public educations: IEducation[],
    public occupations: IOccupation[],
    public enrichedOccupations: IEnrichedOccupations
  ) {}
}
