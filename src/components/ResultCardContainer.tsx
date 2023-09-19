import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ActionType } from '../reducers/SearchReducer';
import { postMatchByText } from '../services/DataService';
import { IEducation } from '../models/IEducation';

export const ResultCardContainer = () => {
  const { search, dispatch } = useContext(SearchContext);

  const getOccupations = async (education: IEducation) => {
    const reponse = await postMatchByText(
      education.text_enrichments_results.enriched_candidates.competencies[0],
      education.education.title[0].content
    );
    dispatch({
      type: ActionType.ADDED_OCCUPATIONS,
      payload: JSON.stringify(reponse),
    });
  };
  return (
    <div className='cardContainer'>
      {search.educations.map((education) => (
        <div className='eduCard' key={education.education.identifier}>
          <h4>
            {education.education.title[0].content} - {education.education.code}
          </h4>
          <p>
            {education.education.form.code},
            {education.education.configuration.code}
          </p>
          <DigiButton onClick={() => getOccupations(education)}>
            Relaterade Yrken
          </DigiButton>
          <DigiButton>Om Utbildningen</DigiButton>
        </div>
      ))}
    </div>
  );
};
