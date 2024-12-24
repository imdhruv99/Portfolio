import './footer.css';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    House,
    Briefcase,
    GraduationCap,
    Lightbulb,
    EnvelopeSimple,
    GithubLogo,
    InstagramLogo,
    LinkedinLogo,
    Sun,
    Moon,
} from '@phosphor-icons/react';

const navItems = [
    { id: 'home', label: 'Home', icon: House, path: '/' },
    {
        id: 'experience',
        label: 'Experience',
        icon: Briefcase,
        path: '/experience',
    },
    {
        id: 'education',
        label: 'Education',
        icon: GraduationCap,
        path: '/education',
    },
    { id: 'projects', label: 'Projects', icon: Lightbulb, path: '/projects' },
    { id: 'contact', label: 'Contact', icon: EnvelopeSimple, path: '/contact' },
    { id: 'separator-1', type: 'separator' },
    {
        id: 'github',
        label: 'Github',
        icon: GithubLogo,
        path: 'https://github.com/imdhruv99',
    },
    {
        id: 'instagram',
        label: 'Instagram',
        icon: InstagramLogo,
        path: 'https://www.instagram.com/_imdhruv99_/',
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: LinkedinLogo,
        path: 'https://www.linkedin.com/in/imdhruv99/',
    },
    { id: 'separator-2', type: 'separator' },
    { id: 'theme', label: 'Toggle Theme', icon: null, path: null },
];

const Footer = () => {
    const [showTooltip, setShowTooltip] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [mousePosition, setMousePosition] = useState(null);
    const navRef = useRef(null);
    const navigate = useNavigate();

    const handleMouseMove = (e) => {
        if (navRef.current) {
            const rect = navRef.current.getBoundingClientRect();
            setMousePosition(e.clientX - rect.left);
        }
    };

    const handleMouseLeave = () => {
        setMousePosition(null);
        setShowTooltip('');
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme');
    };

    const handleNavigation = (path) => {
        if (path) {
            if (path.startsWith('http')) {
                window.open(path, '_blank');
            } else {
                navigate(path);
            }
        }
    };

    // Scale calculation
    const getScale = (itemIndex) => {
        if (mousePosition === null || !navRef.current) return 1;

        const itemWidth = 2.5; // width in rem
        const itemPosition = itemWidth * itemIndex;
        const distance = Math.abs(mousePosition / 16 - itemPosition);
        const maxScale = 2; // Increased maximum scale
        const scaleRange = 1.5; // Reduced range for more dramatic effect

        if (distance > scaleRange) return 1;
        return 1 + (maxScale - 1) * Math.pow(1 - distance / scaleRange, 2);
    };

    return (
        <div
            className={`footer-nav ${isDarkTheme ? 'dark' : 'light'}`}
            style={{
                '--tooltip-bg': isDarkTheme ? '#2a2a2a' : '#ffffff',
                '--tooltip-text': isDarkTheme ? '#ffffff' : '#000000',
                '--nav-bg': isDarkTheme ? '#1a1a1a' : '#f5f5f5',
                '--icon-color': isDarkTheme ? '#ffffff' : '#000000',
                '--hover-bg': isDarkTheme ? '#333333' : '#e0e0e0',
            }}
        >
            <nav
                ref={navRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {navItems.map((item, index) =>
                    item.type === 'separator' ? (
                        <div key={item.id} className="separator" />
                    ) : (
                        <div
                            key={item.id}
                            className="nav-item"
                            style={{
                                '--scale': getScale(index, navItems.length),
                            }}
                            onMouseEnter={() => setShowTooltip(item.id)}
                            onMouseLeave={() => setShowTooltip('')}
                            onClick={() =>
                                item.id === 'theme'
                                    ? toggleTheme()
                                    : handleNavigation(item.path)
                            }
                        >
                            <div className="icon-background">
                                {item.id === 'theme' ? (
                                    isDarkTheme ? (
                                        <Sun
                                            weight="regular"
                                            className="icon"
                                            size={24}
                                        />
                                    ) : (
                                        <Moon
                                            weight="regular"
                                            className="icon"
                                            size={24}
                                        />
                                    )
                                ) : (
                                    <item.icon
                                        weight="regular"
                                        className="icon"
                                        size={24}
                                    />
                                )}
                            </div>
                            {showTooltip === item.id && (
                                <div className="tooltip">{item.label}</div>
                            )}
                        </div>
                    ),
                )}
            </nav>
        </div>
    );
};

export default Footer;
