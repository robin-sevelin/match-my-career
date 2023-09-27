import { Link } from 'react-router-dom';
import { StyledHeader } from './styled/StyledHeader';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <h1>MATCH MY CAREER</h1>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>STARTSIDA</Link>
            </li>
            <li>
              <Link to={'/search'}>SÖK UTBILDNINGAR</Link>
            </li>
          </ul>
        </nav>
      </StyledHeader>
    </>
  );
};
