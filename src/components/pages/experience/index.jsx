import './experience.css';

import { useTheme } from '../../context/ThemeContext';

const Experience = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div
            className={`experience-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
        >
            <h1>Experience</h1>
        </div>
    );
};

export default Experience;
