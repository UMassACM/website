import React from 'react';
import '../App.css';
import NaviBar from './NaviBar';
import BotNaviBar from './BotNaviBar';

function Join({ routes }) {
    return (
        <div>
            <NaviBar />
            <div className="Join">
                <iframe title="ACM Form Google" src="https://docs.google.com/forms/d/e/1FAIpQLSeHYany3qAYRxP_HGYg1EpfKw76DLx24Rtw-TJ5xUxUbERxGQ/viewform?embedded=true" width="640" height="860" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <BotNaviBar/>
        </div>
        
    );
}

export default Join;