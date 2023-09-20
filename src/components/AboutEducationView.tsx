import { DigiTypography } from "@digi/arbetsformedlingen-react";
import { IAboutEducation } from "../models/IAboutEducation";
import { TypographyVariation } from "@digi/arbetsformedlingen";

interface AboutEducationViewProps {
  education: IAboutEducation | null;
}

export const AboutEducationView = ({ education }: AboutEducationViewProps) => {
  return (
    <DigiTypography
    afVariation={TypographyVariation.SMALL}
    >
    <div className='about-education-container'>
      {education && education.education.description && education.education.description.length > 0 && 
        <div key={education.id}>
          <div>
            <h3>Om utbildningen {education.education.title[0].content} ({education.education.code})</h3>
            <p><strong>Id:</strong> {education.id}</p>
            <p><strong>Utbildningsform:</strong> {education.education.form.code}</p>
            <p><strong>Beskrivning:</strong> {education.education.description[0].content}</p>
          </div>
          <div>
            <h3>Utbildningssamordnare:</h3>
            <p>{education.education_providers[0].name[0].content}</p>
            <p>{education.education_providers[0].urls[0].content}</p>
          </div>
          <div>
            <h3>Utbildningstillfällen:</h3>
            <p><strong>Startdatum:</strong> {education.events[0].execution.start}</p>
            <p><strong>Utbildningssamordnare:</strong> {education.events[0].provider}</p>
            <p><strong>Länk:</strong> {education.events[0].urls[0].content}</p>
            <p><strong>Utbildningsperiod:</strong> {education.events[0].execution.start} - {education.events[0].execution.end}</p>
            <p><strong>Studietakt:</strong> {education.events[0].paceOfStudyPercentage} %</p>
          </div>
        </div>
      }
    </div>
    </DigiTypography>
  );
};