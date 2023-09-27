import { Search } from '../models/Search';
import { ActionType } from '../types/ActionTypes';

export interface ISearchAction {
  type: ActionType;
  payload: string;
}

export const SearchReducer = (search: Search, action: ISearchAction) => {
  switch (action.type) {
    case ActionType.ADDED_EDUCATIONS_SEARCH: {
      return { ...search, educationSearch: action.payload };
    }

    case ActionType.ADDED_OCCUPATIONS_SEARCH: {
      const data = JSON.parse(action.payload);
      return {
        ...search,
        occupationsSearch: {
          text: data.text_enrichments_results.enriched_candidates
            .competencies[0],
          education: data.education.description[0].content,
          name: data.education.title[0].content,
          code: data.education.form.code,
        },
      };
    }

    case ActionType.ADDED_ENRICHED_OCCUPATIONS_SEARCH: {
      return { ...search, enchrichedOccupationSearch: action.payload };
    }

    case ActionType.ADDED_ABOUT_EDUCATION_SEARCH: {
      return { ...search, aboutEducationSearch: action.payload };
    }

    default:
      return search;
  }
};
