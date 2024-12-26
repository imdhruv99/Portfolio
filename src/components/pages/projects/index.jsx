import './projects.css';

import { useTheme } from '../../context/ThemeContext';

const Projects = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div
            className={`projects-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
        >
            <h1>Projects</h1>
        </div>
    );
};

export default Projects;
