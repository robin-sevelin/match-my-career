import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <h1>Hello header</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Hem</Link>
          </li>
          <li>
            <Link to={'/search'}>Sök</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
