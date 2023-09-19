import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { DigiButton } from "@digi/arbetsformedlingen-react";
import { IEducation } from "../models/IEducation";
import { getEducationById } from "../services/DataService";

interface ResultCardContainerProps {
  selectedEducation: IEducation | null;
  setSelectedEducation: (education: IEducation | null) => void;
}

export const ResultCardContainer = ({ setSelectedEducation }: ResultCardContainerProps) => {
  const searchResult = useContext(SearchContext);
  const foundEducations = searchResult.search.educations;

  const handleEducationClick = async (id: string) => {
    try {
      const response = await getEducationById(id);
      setSelectedEducation(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cardContainer">
      {foundEducations.map((education) => (
        <div className="eduCard" key={education.education.identifier}>
          <h4>
            {education.education.title[0].content} - {education.education.code}
          </h4>
          <p>
            {education.education.form.code}, {education.education.configuration.code}
          </p>
          <DigiButton onClick={() => handleEducationClick(education.id)}>
            Om Utbildningen
          </DigiButton>
          <DigiButton>Relaterade yrken</DigiButton>
        </div>
      ))}
    </div>
  );
};