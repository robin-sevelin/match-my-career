import { useContext } from "react"
import { SearchContext } from "../contexts/SearchContext"
import { DigiButton } from "@digi/arbetsformedlingen-react";

export const ResultCardContainer = () => {
    const searchResult = useContext(SearchContext);
    const foundEducations = searchResult.search.educations;
    
    console.log(foundEducations[0]);
    
    return(
        <div className="cardContainer">
            {foundEducations.map((education) => (
                <div className="eduCard" key={education.education.identifier}>
                    <h4>{education.education.title[0].content} - {education.education.code}</h4>
                    <p>{education.education.form.code}, {education.education.configuration.code}</p>
                    <DigiButton>Relaterade Yrken</DigiButton>
                    <DigiButton>Om Utbildningen</DigiButton>
                </div>
            ))}
        </div>
    )
}