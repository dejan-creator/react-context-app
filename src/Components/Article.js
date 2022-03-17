import { useContext } from 'react';
import  ThemeContext  from '../context/ThemeContext';

function Article({ text }) {

    const { theme } = useContext(ThemeContext);

    return (
        <p style={theme === 'light' 
        ? { backgroundColor: 'white', color: 'black' }
        : { backgroundColor: 'darkgray', color: 'darked' }
        }>
            {text}
        </p>
    );
}

export default Article;