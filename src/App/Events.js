import React from 'react';
import '../App.css';
import NaviBar from './NaviBar';

function Events({ routes }) {
    return (
        <div className="Events">
            <NaviBar />
            <header className="Events-header">
                <p>Events</p>
            </header>
        </div>
    );
}

export default Events;
