import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  HomeLayout,
  Error,
  Newsletter,
  CockTail,
  Landing,
} from './pages';

import { loader as landingLoader } from './pages/Landing';

import { loader as singleCocktailLoader } from './pages/Cocktail';

import { action as newsletterAction } from './pages/Newsletter';

import CocktailCard from './components/CocktailCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: 'cocktail/:id',
        element: <CockTail />,
        loader: singleCocktailLoader,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
