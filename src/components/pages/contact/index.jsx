import './contact.css';

import { useTheme } from '../../context/ThemeContext';

const Contact = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div
            className={`contact-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
        >
            <h1>Contact</h1>
        </div>
    );
};

export default Contact;
