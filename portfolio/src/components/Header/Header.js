import React from 'react';

const Header = () => {
    return (
        <header>
            <section className='container main-hero-container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
                        <h1 className='display-2'>Dhruv Prajapati</h1>
                        <p className='main-hero-para'>hello World is the best thing
                        </p>
                    </div>
                    <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center'>
                        <img alt="Dhruv Prajapati" src='01.jpg' className='img-fluid'></img>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;