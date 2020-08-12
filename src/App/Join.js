import React from 'react';
import '../App.css';
import NaviBar from './NaviBar';

function Join({ routes }) {
    return (
        <div>
            <NaviBar />
            <div className="Join">
                <iframe title="UMass ACM form here" src="https://docs.google.com/forms/d/e/1FAIpQLSdVIvc3BjMsgncB3_MDyTMFn1giYJz0Fkkuru4JVucAKAOKcg/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    );
}

export default Join;
