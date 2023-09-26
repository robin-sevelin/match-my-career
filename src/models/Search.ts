export class Search {
  constructor(
    public educationSearch: string,
    public occupationsSearch: {
      text: string;
      education: string;
      name: string;
      code: string;
    },
    public enchrichedOccupationSearch: string,
    public aboutEducationSearch: string
  ) {}
}
