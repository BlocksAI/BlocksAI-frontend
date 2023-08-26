import { useEffect, useState } from 'react';
import './App.css';
import Auth from './components/pages/Auth';
import Marketplace from './components/pages/Marketplace';
import Chatroom from './components/pages/Chatroom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/pages/Error';
import Layout from './components/pages/Layout';

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
          path: '/',
          element: <Layout />,
          children: [
            {
              path: 'market',
              element: <Marketplace />,
            },
            {
              path: 'chat',
              element: <Chatroom />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
