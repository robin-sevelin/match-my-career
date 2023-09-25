import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ActionType } from '../reducers/SearchReducer';
import { IEducation } from '../models/IEducation';
import { useNavigate } from 'react-router-dom';

export const ResultCardContainer = () => {
  const { dispatch, search } = useContext(SearchContext);
  const navigate = useNavigate();

  const getOccupations = async (education: IEducation) => {
    dispatch({
      type: ActionType.ADDED_OCCUPATIONS,
      payload: JSON.stringify(education),
    });
    navigate('/occupations');
  };

  const getEducation = async (education: IEducation) => {
    dispatch({
      type: ActionType.ADDED_ABOUT_EDUCATION,
      payload: JSON.stringify(education),
    });
    navigate('/abouteducation');
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
          <DigiButton onClick={() => getEducation(education)}>
            Om Utbildningen
          </DigiButton>
        </div>
      ))}
    </div>
  );
};
