import './home.css';

import { useTheme } from '../../context/ThemeContext';
import OrbitScene from '../../common/orbitSection/orbitScene';
import { Canvas } from '@react-three/fiber';
import Avtar from '../../common/avtar';

const Home = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div
            className={`home-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
        >
            <section className="orbitSection">
                <div className="grid-container">
                    <div className="content-left">
                        <Canvas
                            shadows
                            camera={{ position: [-2, 2, 7], fov: 30 }}
                            className="avtar-canvas"
                        >
                            <Avtar isDarkTheme={isDarkTheme} />
                            <ambientLight intensity={isDarkTheme ? 4 : 7} />
                        </Canvas>
                    </div>
                    <div className="content-right">
                        <p className="description">Hello, The Name is </p>
                        <h1 className="title">DHRUV PRAJAPATI</h1>
                        <p className="subtitle">Senior Software Engineer</p>
                        <p className="description">
                            I craft intelligent, data-driven experiences -
                            blending full-stack expertise with AI innovation.
                        </p>
                    </div>
                </div>
                <OrbitScene isDarkTheme={isDarkTheme} />
            </section>
        </div>
    );
};

export default Home;
