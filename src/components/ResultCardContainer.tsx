import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ActionType } from '../reducers/SearchReducer';
import { getEducationById, postMatchByText } from '../services/DataService';
import { IEducation } from '../models/IEducation';

interface ResultCardContainerProps {
  selectedEducation: IEducation | null;
  setSelectedEducation: (education: IEducation | null) => void;
}

export const ResultCardContainer = ({
  setSelectedEducation,
}: ResultCardContainerProps) => {
  const { dispatch } = useContext(SearchContext);
  const searchResult = useContext(SearchContext);
  const foundEducations = searchResult.search.educations;

  const getOccupations = async (education: IEducation) => {
    const reponse = await postMatchByText(
      education.text_enrichments_results.enriched_candidates.competencies[0],
      education.education.description[0].content
    );
    dispatch({
      type: ActionType.ADDED_OCCUPATIONS,
      payload: JSON.stringify(reponse),
    });
  };

  const handleEducationClick = async (id: string) => {
    try {
      const response = await getEducationById(id);
      setSelectedEducation(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='cardContainer'>
      {foundEducations.map((education) => (
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
          <DigiButton onClick={() => handleEducationClick(education.id)}>
            Om Utbildningen
          </DigiButton>
        </div>
      ))}
    </div>
  );
};
