import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Hem</Link>
          </li>
          <li>
            <Link to={'/search'}>Sök Utbildning</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
