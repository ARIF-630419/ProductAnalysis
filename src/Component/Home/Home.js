import React from 'react';
import "./Home.css"
import image from "../../images/laptop.PNG"

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="text-container">
                    <p className='large color'>Your next laptop</p>
                    <p className='large'>Your best laptop</p>
                    <p className='text-contant'>ASUS is passionate about technology and driven by innovation. We dream, we dare and we strive to create an effortless and joyful digital life for everyone. We're always in search of incredible ideas and experiences, and we aspire to deliver the incredible in everything we do.</p>
                </div>
                <div className="picture-container">
                    <img src={image} alt="arif" />
                </div>
            </div>
            <div>
                <h1>Customer Reviews (3)</h1>

            </div>
        </div>

    );
};

export default Home;