import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ActionType } from '../types/ActionTypes';
import { IEducation } from '../models/IEducation';
import { useNavigate } from 'react-router-dom';

interface IResultCardProps {
  educations: IEducation[];
}

export const ResultCardContainer = ({ educations }: IResultCardProps) => {
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const getOccupations = async (education: IEducation) => {
    dispatch({
      type: ActionType.ADDED_OCCUPATIONS_SEARCH,
      payload: JSON.stringify(education),
    });
    navigate('/occupations');
  };

  const getEducation = async (education: IEducation) => {
    dispatch({
      type: ActionType.ADDED_ABOUT_EDUCATION_SEARCH,
      payload: education.id,
    });
    navigate('/abouteducation');
  };

  return (
    <div className='cardContainer'>
      {educations.map((education) => (
        <div className='eduCard' key={education.education.identifier}>
          <h4>{education.education.title[0].content}</h4>
          <p className='eduCode'>
            {education.education.form.code},
            {education.education.configuration.code}
          </p>
          <p>{education.education.code}</p>
          <p>
            {education.providerSummary.providers[0]},{' '}
            {education.eventSummary.paceOfStudyPercentage[0]} %
          </p>
          <DigiButton onClick={() => getOccupations(education)}>
            Relaterade Yrken
          </DigiButton>
          <DigiButton onClick={() => getEducation(education)}>
            Om Utbildningen
          </DigiButton>
        </div>
      ))}
    </div>
  );
};
