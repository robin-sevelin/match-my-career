import { useEffect, useState } from 'react';

import { IOccupation } from '../models/IRelatedOccupations';
import { postMatchByText } from '../services/DataService';
import { Search } from '../models/Search';

export const useGetOccupations = (search: Search) => {
  const [occupations, setOccupations] = useState<IOccupation[]>([]);

  useEffect(() => {
    if (occupations.length === 0) {
      const getData = async (search: Search) => {
        const data = await postMatchByText(
          search.educations[0].text_enrichments_results.enriched_candidates
            .competencies[0],
          search.educations[0].education.description[0].content
        );
        setOccupations(data);
      };

      getData(search);
    }
  }, [occupations, search]);

  return { occupations } as const;
};
