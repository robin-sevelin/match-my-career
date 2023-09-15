import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <h1>Hello header</h1>
      <Link to={'/'}>Hem</Link>
      <Link to={'/search'}>Sök</Link>
    </>
  );
};
