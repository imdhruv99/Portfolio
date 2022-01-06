import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import  '../SocialMedia/SocialMedia.css';

const Header = () => {
    return (
        <header>
            <section className='container main-hero-container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
                        <h1 className='display-2'>Dhruv Prajapati</h1>
                        <p className='main-hero-para'>A Full Stack Developer based in Ahmedabad, India.<br />
                        I enjoy building small sites to rich powerfull <br/> Full Stack Web application.
                        </p>
                        <SocialMedia />
                    </div>
                    <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images'>
                        <img src='/images/01.jpeg' alt='Dhruv Prajapati' className='img-fluid'/>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;