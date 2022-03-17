import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import ThemeContext from './context/ThemeContext';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light');

    return (

    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
    
  );
}

export default App;
