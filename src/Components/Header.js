import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Header() {

    const { theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
  if (theme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
};

    return (
        <header>
            This is header
            <button onClick={ toggleTheme }> 
                change theme
            </button>
        </header>
    );
}

export default Header;