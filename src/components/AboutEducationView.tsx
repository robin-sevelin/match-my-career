import { IEducation } from '../models/IEducation';

interface AboutEducationViewProps {
  education: IEducation | null;
}

export const AboutEducationView = ({ education }: AboutEducationViewProps) => {
  return (
    <div className='about-education-container'>
      {education &&
        education.education.description &&
        education.education.description.length > 0 && (
          <div key={education.id}>
            <div>
              <h4>
                Om utbildningen {education.education.title[0].content} (
                {education.education.code})
              </h4>
              <p>Id: {education.id}</p>
              <p>Utbildningsform: {education.education.form.code}</p>
              <p>Beskrivning: {education.education.description[0].content}</p>
            </div>
            <div>
              <h4>Utbildningssamordnare:</h4>
              <p>{education.education_providers[0].name[0].content}</p>
              <p>{education.education_providers[0].urls[0].content}</p>
            </div>
            <div>
              <h4>Utbildningstillfällen:</h4>
              <p>Startdatum: {education.events[0].execution.start}</p>
              <p>Utbildningssamordnare: {education.events[0].provider}</p>
              <p>Länk: {education.events[0].urls[0].content}</p>
              <p>
                Utbildningsperiod: {education.events[0].execution.start} -{' '}
                {education.events[0].execution.end}
              </p>
              <p>Studietakt: {education.events[0].paceOfStudyPercentage} %</p>
            </div>
          </div>
        )}
    </div>
  );
};
