import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Form } from './components/Form';
import { educationLoader } from './loaders/educationLoader';

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
        element: <Form />,
        loader: educationLoader,
      },
    ],
  },
]);
