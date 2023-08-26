import { useEffect, useState } from 'react';
import './App.css';
import Auth from './components/pages/Auth';
import Marketplace from './components/pages/Marketplace';
import Chatroom from './components/pages/Chatroom';

function App() {
  const [name, setName] = useState();

  useEffect(() => {
    let name = localStorage.getItem('name');
    if (name !== null) {
      setName(name);
    }
  }, []);

  return <>{name ? <Chatroom /> : <Auth />}</>;
}

export default App;
