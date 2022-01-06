import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGooglePlus,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
    return (
        <div className="social-container">
            <a
            href="https://www.facebook.com/dhruv.prajapati.2899"
            className="facebook social"
            >
            <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://twitter.com/imdhruv_28" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
            <a
            href="https://www.instagram.com/imdhruv_28/"
            className="instagram social"
            >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
            href="mailto:dpdhruvprajapati@gmail.com"
            className="googleplus social"
            >
            <FontAwesomeIcon icon={faGooglePlus} size="3x" />
            </a>
            <a
            href="https://www.linkedin.com/in/imdhruv99/"
            className="linkedin social"
            >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a
            href="https://github.com/imdhruv99"
            className="github social"
            >
            <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
        </div>
    );
};

export default SocialMedia;