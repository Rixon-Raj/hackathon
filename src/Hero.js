import React, { useEffect, useState } from 'react';
import heroImage from './assets/hero.png';
// import './Hero.css';

const Hero = () => {
    const isMobileDevice = () => {
        return window.innerWidth <= 768; // Adjust the breakpoint as needed
    };

    const [isMobile, setIsMobile] = useState(isMobileDevice());

    useEffect(() => {
        // Update the state on component mount and when the window is resized
        const handleResize = () => {
            setIsMobile(isMobileDevice());
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="hero py-5" style={{ background: '#FFF9F4' }} >
            <div className="container">
                <div className={`row ${isMobile ? 'text-center' : ''}`}>
                    <div className={`col-lg-6 ${isMobile ? 'mb-4' : ''}`}>
                        <img src={heroImage} alt="Hero Product" className="img-fluid" />
                    </div>
                    <div className={`col-lg-6 d-flex align-items-center ${isMobile ? 'justify-content-center' : ''}`}>
                        <div>
                            <h1 className="mb-4" style={{ fontFamily: 'Bebas Neue', color: '#FA804C' }}>NIKE REACT</h1>
                            <h1 className="mb-4" style={{ fontFamily: 'Bebas Neue', color: '#000' }}>INFINITY RUN 2</h1>
                            <a href="#products" className="btn btn-primary btn-lg">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
