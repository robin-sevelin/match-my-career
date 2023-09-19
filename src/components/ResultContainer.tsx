import { OccupationsList } from './OccupationsList';
import { ResultCardContainer } from './ResultCardContainer';

export const ResultContainer = () => {
  return (
    <>
      <div className='result'>
        <ResultCardContainer />
        <OccupationsList />
      </div>
    </>
  );
};
