import './education.css';

import { useTheme } from '../../context/ThemeContext';

const Education = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div
            className={`education-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
        >
            <h1>Education</h1>
        </div>
    );
};

export default Education;
