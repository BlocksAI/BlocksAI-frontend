import { useEffect, useState } from 'react';
import './App.css';
import Auth from './components/pages/Auth';
import Marketplace from './components/pages/Marketplace';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/pages/Error';

function App() {
  const [name, setName] = useState();

  useEffect(() => {
    let name = localStorage.getItem('name');
    if (name !== null) {
      setName(name);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/auth',
          element: <Auth />,
        },
        {
          path: '/market',
          element: <Marketplace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
