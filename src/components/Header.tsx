import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
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
    </header>
  );
};
