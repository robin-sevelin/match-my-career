export class Search {
  constructor(
    public educationSearch: string,
    public occupationsSearch: IOccupationSearch,
    public enchrichedOccupationSearch: string,
    public aboutEducationSearch: string
  ) {}
}

interface IOccupationSearch {
  text: string;
  education: string;
  name: string;
  code: string;
}
