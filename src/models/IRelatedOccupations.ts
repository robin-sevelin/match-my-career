export interface IRealatedOccupations {
  related_occupations: IOccupation[];
}

export interface IOccupation {
  id: string;
  occupation_label: string;
  concept_taxamony_id: string;
}
