import './home.css';

import { useTheme } from '../../context/ThemeContext';

const Home = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div
            className={`home-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
        >
            <h1>Home</h1>
        </div>
    );
};

export default Home;
