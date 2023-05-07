import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Render from './components/UserAuth';
import AuthProvider from './contexts/AuthProvider';
import Protected from './components/Protected';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Protected><NavBar/></Protected>,
    },
    {
      path: '/auth',
      element: <Render />,
    }

  ]);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={10}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: 'white',
            color: 'black',//#363636
            width:'300px'
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'black',
              secondary: 'green',
            },
            
          },
        }}
      />
      <AuthProvider>
        <RouterProvider router={router} />;
      </AuthProvider>


    </>
  )
};

export default App;
