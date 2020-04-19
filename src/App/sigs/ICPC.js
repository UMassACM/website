import React from 'react';
import '../../App.css';

import NaviBar from '../NaviBar';

function ICPC({ routes }) {
    return (
        <div className="ICPC">
            <NaviBar />
            <header className="ICPC-header">
                <p>ICPC</p>
            </header>
        </div>
    );
}



export default ICPC;
