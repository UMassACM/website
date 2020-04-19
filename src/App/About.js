import React from 'react';
import '../App.css';
import NaviBar from './NaviBar';
import BotNaviBar from './BotNaviBar';

function About({ routes }) {
    return (
        <div className="About">
            <NaviBar />
            <header className="about-header">
                <h2>Our Leaders</h2>
            </header>
            <BotNaviBar/>
        </div>
    );
}



export default About;
