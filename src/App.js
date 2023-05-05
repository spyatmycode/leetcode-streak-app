import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Render from './components/Signin';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
