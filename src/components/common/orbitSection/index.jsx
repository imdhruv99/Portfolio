import './orbitSection.css';

import OrbitScene from './orbitScene.jsx';
import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';

import Avtar from "../avtar";

const OrbitSection = ({ isDarkTheme }) => {
    return (
        <section className="orbitSection">
            <div className="grid-container">
                <div className="content-left">
                    <Canvas shadows camera={{ position: [-2, 2, 7], fov: 30 }} className='avtar-canvas'>
                        <Avtar />
                        <ambientLight intensity={3} />
                    </Canvas>
                </div>
                <div className="content-right">
                    <h1 className="title">DHRUV PRAJAPATI</h1>
                    <p className="subtitle">Software Engineer</p>
                    <p className="description">
                        I craft intelligent, data-driven experiences - blending
                        full-stack expertise with AI innovation.
                    </p>
                </div>
            </div>
            <OrbitScene isDarkTheme={isDarkTheme} />
        </section>
    );
};

OrbitSection.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
};

export default OrbitSection;
