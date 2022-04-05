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
                    <p className='text-contant'>ASUS ExpertBook L1 L1500CDA Laptop boasts high performance, military-grade durability, and extensive customization. This new ASUS ExpertBook L1 L1500CDA comes with AMD Ryzen 3 3250U Processor (4M Cache, 2.1 GHz up to 3.7 GHz) and AMD Radeon Graphics. Its also engineered to confidently handle whatever tasks come your way, with a full set of I/O ports, speedy WiFi 6, and cutting-edge AI noise-canceling technology. ExpertBook L1 streamlines your workflow to keep you productive.</p>
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