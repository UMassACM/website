import React from 'react';
import '../../App.css';
import {SigHeader,PageSocial,MaterialCards} from './CommonSig';
import BotNaviBar from '../BotNaviBar';

function GamedevLeaders() {
	const leaders1 = [
		{
			imgLocation : "../images/Gamedev/Leaders/AlexVukovic.png",
			Name : "Alex Vukovic",
			Title : "President",
		},
		{
			imgLocation : "../images/Gamedev/Leaders/VinayRamesh.png",
			Name : "Vinay Ramesh" ,
			Title : "Secretary",
		},

	];
	return (
		<MaterialCards leaders={leaders1}></MaterialCards>
		
	);
}

function Gamedev({ routes }) {
    const socials = [
        {Name: "Discord", webUrl: "https://discord.gg/aZreWub"},
        {Name: "Instagram", webUrl: "https://www.instagram.com"},
    ]
    return (
        <div>
            <SigHeader signame="Video Game Development" sig= "The UMass Video Game Development Club is a place where students can network, learn about the process of developing games, and participate in events where they can make their own games. Participants of all skill levels are welcome, even if you’ve never made a game before!"/>
            <div className="sig-section">
                <GamedevLeaders />
            </div>
            <PageSocial socials={socials} />
            <BotNaviBar></BotNaviBar>
        </div>
    );
}

export {GamedevLeaders};
export default Gamedev;
