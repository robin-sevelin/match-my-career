import { IEducation } from './IEducation';
import { IEnrichedOccupation } from './IEnrichedOccupation';
import { IOccupation } from './IRelatedOccupations';

export class Search {
  constructor(
    public searchText: string,
    public educations: IEducation[],
    public occupations: IOccupation[],
    public enchrichedOccupation: IEnrichedOccupation,
    public showOccupation: boolean,
    public showAboutView: boolean
  ) {}
}
