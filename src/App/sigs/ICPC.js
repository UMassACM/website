import React from 'react';
import '../../App.css';
import { SigHeader, PageSocial, MaterialCards } from './CommonSig';
import BotNaviBar from '../BotNaviBar';

function ICPCLeaders() {
	const leaders1 = [
		{
			imgLocation : "../images/ICPC/Leaders/AdityaAgarwal.png",
			Name : "Aditya Agarwal",
			Title : "Chair",
		},
		{
			imgLocation : "../images/ICPC/Leaders/SattwikDas.png",
			Name : "Sattwik Das" ,
			Title : "Vice Chair",
		},
	]
	return (
		<MaterialCards subCSS="icpc-leaders" imgCSS="icpc-leaders-img" leaders={leaders1}></MaterialCards>
	);
}

function ICPC({ routes }) {
    const socials = [{Name: "Discord", webUrl: "https://discord.gg/hpgAHhX"}]
    return (
        <div>
            <SigHeader  signame= "The ICPC (International Collegiate Programming Contest) is an annual multi-tiered competitive programming competition among the universities of the world. " sig="We are a group of students who practice and compete in the ICPC and other competitive programming competitions!"/>
            <div className="sig-section">
                <ICPCLeaders />
            </div>
            <PageSocial socials={socials} />
            <BotNaviBar></BotNaviBar>
        </div>
    );
}


export {ICPCLeaders};
export default ICPC;
