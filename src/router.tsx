import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { educationLoader } from './loaders/educationLoader';
import { Search } from './components/Search';
import { EnrichedOccupations } from './components/EnrichedOccupations';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
        loader: educationLoader,
      },
      {
        path: '/skillchart',
        element: <EnrichedOccupations />,
      },
    ],
  },
]);
