import './footer.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
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
    const { isDarkTheme, toggleTheme } = useTheme();
    const navRef = useRef(null);
    const itemsRef = useRef([]);
    const navigate = useNavigate();

    const resetIcons = () => {
        itemsRef.current.forEach((item) => {
            if (item) {
                item.style.transform = 'scale(1) translateY(0)';
            }
        });
    };

    const focusIcon = (index) => {
        resetIcons();
        const transformations = [
            { offset: -2, scale: 1.1, translateY: 0 },
            { offset: -1, scale: 1.2, translateY: -6 },
            { offset: 0, scale: 1.5, translateY: -10 },
            { offset: 1, scale: 1.2, translateY: -6 },
            { offset: 2, scale: 1.1, translateY: 0 },
        ];

        transformations.forEach(({ offset, scale, translateY }) => {
            const itemIndex = index + offset;
            const item = itemsRef.current[itemIndex];
            if (item && !navItems[itemIndex]?.type) {
                item.style.transform = `scale(${scale}) translateY(${translateY}px)`;
            }
        });
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

    return (
        <div
            className={`footer-nav ${isDarkTheme ? 'dark' : 'light'}`}
            style={{
                '--tooltip-bg': isDarkTheme ? '#2a2a2a' : '#ffffff',
                '--tooltip-text': isDarkTheme ? '#ffffff' : '#000000',
                '--nav-bg': isDarkTheme ? '#1a1a1a' : '#f5f5f5',
                '--icon-color': isDarkTheme ? '#ffffff' : '#000000',
            }}
        >
            <nav ref={navRef}>
                {navItems.map((item, index) =>
                    item.type === 'separator' ? (
                        <div key={item.id} className="separator" />
                    ) : (
                        <div
                            key={item.id}
                            ref={(el) => (itemsRef.current[index] = el)}
                            className="nav-item"
                            onMouseEnter={() => {
                                setShowTooltip(item.id);
                                focusIcon(index);
                            }}
                            onMouseLeave={() => {
                                setShowTooltip('');
                                resetIcons();
                            }}
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
