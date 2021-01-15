import React from 'react';
import '../../App.css';
import { SigHeader, PageSocial, MaterialCards } from './CommonSig';
import BotNaviBar from '../BotNaviBar';

function MLLeaders() {
	const leaders1 = [
		{
			imgLocation : "../images/ML/Leaders/CooperSigrist.png",
			Name : "Cooper Sigrist",
			Title : "President",
		},
		{
			imgLocation : "../images/ML/Leaders/RenosZabounidis.png",
			Name : "Renos Zabounidis" ,
			Title : "Vice President",
		},
		{
			imgLocation : "../images/ML/Leaders/PrakharChaturvedi.png",
			Name : "Prakhar Chaturvedi" ,
			Title : "Treasurer",
		},
		{
			imgLocation : "../images/ML/Leaders/ShreyansBabel.png",
			Name : "Shreyans Babel" ,
			Title : "Secretary",
		},

	];
	return (
		<MaterialCards subCSS="ml-leaders" imgCSS="ml-leaders-img" leaders={leaders1}></MaterialCards>
	);
}

function ML() {
    const socials = [
        { Name: "Discord", webUrl: "https://discord.gg/EyqDyXj" },
        { Name: "Email: umassACMML@gmail.com", webUrl: "null" },
    ]
    return (
        <div>
            <SigHeader signame="Machine Learning" sig="Come talk about machine learning, data mining, and related fields. We are a group interested in exploring the practical implications and theoretical underpinnings of machine learning. Participants of all skill levels are encouraged to attend our meetings and get involved! " />
            <div className="sig-section">
                <MLLeaders />
            </div>
            <PageSocial socials={socials} />
            <BotNaviBar></BotNaviBar>
        </div>
    );
}


export {MLLeaders};
export default ML;
