import { IEducation } from "../models/IEducation";
import { AboutEducationView } from "./AboutEducationView";
import { ResultCardContainer } from "./ResultCardContainer";
import { useState } from "react";

export const ResultContainer = () => {
  const [selectedEducation, setSelectedEducation] = useState<IEducation | null>(null);

  return (
    <>
      <div className='result'>
        <ResultCardContainer selectedEducation={selectedEducation} setSelectedEducation={setSelectedEducation} />
          <AboutEducationView education={selectedEducation} />
      </div>
    </>
  );
};