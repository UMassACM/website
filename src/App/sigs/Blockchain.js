import React from 'react';
import '../../App.css';
import {SigHeader,PageSocial,MaterialCards} from './CommonSig';
import BotNaviBar from '../BotNaviBar';

function BlockchainLeaders() {
	const leaders1 = [
		{
			imgLocation : "../images/Blockchain/Leaders/DanCline.png",
			Name : "Dan Cline",
			Title : "Co-chair",
		},
		{
			imgLocation : "../images/Blockchain/Leaders/SathvikBirudavolu.png",
			Name : "Sathvik Birudavolu" ,
			Title : "Co-chair",
		},
		{
			imgLocation : "../images/Blockchain/Leaders/ApurvShah.png",
			Name : "Apurv Shah" ,
			Title : "Vice Chair",
		},
		{
			imgLocation : "../images/Blockchain/Leaders/KalyanMaddieni.png",
			Name : "Kalyan Maddieni" ,
			Title : "Secretary",
		},

	];
	return (
		<MaterialCards subCSS="blockchain-leaders" imgCSS="gamedev-leaders-img" leaders={leaders1}></MaterialCards>
	);
}

function Blockchain() {
    const socials = [
        {Name: "Discord", webUrl: "https://discord.gg/aZreWub"},
        {Name: "Instagram", webUrl: "https://www.instagram.com"},
    ]
    return (
        <div>
            <SigHeader signame="Blockchain" sig= ""/>
            <div className="sig-section">
                <BlockchainLeaders />
            </div>
            <PageSocial socials={socials} />
            <BotNaviBar></BotNaviBar>
        </div>
    );
}


export {BlockchainLeaders}
export default Blockchain;
