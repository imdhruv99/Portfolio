import './orbitSection.css';

import OrbitScene from './orbitScene.jsx';
import PropTypes from 'prop-types';

const OrbitSection = ({ isDarkTheme }) => {
    return (
        <section className="orbitSection">
            <div className="content">
                <h1 className="title">DHRUV PRAJAPATI</h1>
                <p className="subtitle">Senior Software Engineer</p>
            </div>
            <OrbitScene isDarkTheme={isDarkTheme} />
        </section>
    );
};

OrbitSection.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
};

export default OrbitSection;
