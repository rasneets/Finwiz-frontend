import React from 'react';
import News from '../components/news';
import '../styling/home.css';
import building from '../images/mainbuilding.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="mainimg">
                <img src={building} alt="NIT Warangal Main Building" />
            </div>
            <div className="newsb">
                <News />
            </div>
        </div>
    );
};

export default Home;
