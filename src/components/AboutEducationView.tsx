import {
  DigiButton,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from '@digi/arbetsformedlingen-react';
import {
  ButtonVariation,
  TypographyHeadingJumboLevel,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import '../style/aboutpage/_aboutpage.scss';
import { useGetAboutEducation } from '../hooks/useGetAboutEducation';
import { ShowLoader } from './ShowLoader';

export const AboutEducationView = () => {
  const { search } = useContext(SearchContext);
  const education = useGetAboutEducation(search);
  const navigate = useNavigate();

  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        {education ? (
          <div className='about-education-container'>
            <DigiTypographyHeadingJumbo
              afText={education.education.education.title[0].content}
              afLevel={TypographyHeadingJumboLevel.H2}
            ></DigiTypographyHeadingJumbo>
            <p>
              <strong>Code: </strong>
              {education.education.education.code}
            </p>
            <p>
              <strong>Id: </strong>
              {education.education.id}
            </p>
            <p>
              <strong>Utbildningsform: </strong>
              {education.education.education.form.code}
            </p>
            <p>
              <strong>Beskrivning: </strong>
              {education.education.education.description[0].content}
            </p>
            <h3>Utbildningssamordnare: </h3>
            <p>{education.education.education_providers[0].name[0].content}</p>
            <p>{education.education.education_providers[0].urls[0].content}</p>
            <h3>Utbildningstillfällen: </h3>
            <p>
              <strong>Startdatum: </strong>
              {education.education.events[0].execution.start}
            </p>
            <p>
              <strong>Utbildningssamordnare: </strong>
              {education.education.events[0].provider}
            </p>
            <p>
              <strong>Länk: </strong>
              {education.education.events[0].urls[0].content}
            </p>
            <p>
              <strong>Utbildningsperiod: </strong>
              {education.education.events[0].execution.start} -
              {education.education.events[0].execution.end}
            </p>
            <p>
              <strong>Studietakt: </strong>
              {education.education.events[0].paceOfStudyPercentage} %
            </p>
          </div>
        ) : (
          <ShowLoader></ShowLoader>
        )}

        <div className='back-btn-div'>
          <DigiButton
            afVariation={ButtonVariation.SECONDARY}
            onAfOnClick={() => navigate('/search')}
          >
            Tillbaka
          </DigiButton>
        </div>
      </DigiTypography>
    </>
  );
};
