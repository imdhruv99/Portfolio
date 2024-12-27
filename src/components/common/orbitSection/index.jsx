import './orbitSection.css';

import OrbitScene from './orbitScene.jsx';
import PropTypes from 'prop-types';

import profileImage from '../../../assets/images/profile.jpg'

const OrbitSection = ({ isDarkTheme }) => {
    return (
        <section className="orbitSection">
            <div className='grid-container'>
                <div className='content-left'>
                    <img src={profileImage} alt="Profile" className="left-image" />
                </div>
                <div className="content-right">
                    <h1 className="title">DHRUV PRAJAPATI</h1>
                    <p className="subtitle">Software Engineer</p>
                    <p className="description">
                        I craft intelligent, data-driven experiences - blending full-stack expertise with AI innovation.
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
