import { useEffect, useState } from 'react';
import './App.css';
import Auth from './components/pages/Auth';

function App() {
  const [name, setName] = useState();

  useEffect(() => {
    let name = localStorage.getItem('name');
    if (name !== null) {
      setName(name);
    }
  }, []);

  return <>{name ? <Marketplace /> : <Auth />}</>;
}

export default App;
