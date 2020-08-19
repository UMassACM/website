import React from 'react';
import '../../App.css';
import {SigHeader,PageSocial,MaterialCards} from './CommonSig';
import BotNaviBar from '../BotNaviBar';

function WebdevLeaders() {
	const leaders1 = [

	];
	return (
		<MaterialCards leaders={leaders1}></MaterialCards>
		
	);
}

function Webdev({ routes }) {
    const socials = [
    ]
    return (
        <div>
            <SigHeader signame="Web Development" sig= "The Web Development interest group of UMass ACM!"/>
            <div className="sig-section">
                <WebdevLeaders />
            </div>
            <PageSocial socials={socials} />
            <BotNaviBar></BotNaviBar>
        </div>
    );
}

export {WebdevLeaders};
export default Webdev;
