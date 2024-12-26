import './home.css';

import { useTheme } from '../../context/ThemeContext';
import OrbitSection from '../../common/orbitSection';

const Home = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div
            className={`home-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
        >
            <OrbitSection isDarkTheme={isDarkTheme} />
        </div>
    );
};

export default Home;
