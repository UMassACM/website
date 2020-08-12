import React from 'react';
import '../App.css';
import NaviBar from './NaviBar';
import BotNaviBar from './BotNaviBar';
import {ICPCLeaders} from './sigs/ICPC'
import {BlockchainLeaders} from './sigs/Blockchain'
import {GamedevLeaders} from './sigs/Gamedev'
import {DesignLeaders} from './sigs/Design'
import {MLLeaders} from './sigs/ML'
import {MaterialCards} from './sigs/CommonSig'

function About() {
	const leaders1 = [
        {
            imgLocation: "./images/Leaders/AyushKhandewal.png",
            Name: "Ayush Khandewal",
            Title: "Chair",
        },
        {
            imgLocation: "./images/Leaders/SaakshatSingh.png",
            Name: "Saakshat Singh",
            Title: "Vice Chair",
        },
        {
            imgLocation: "./images/Leaders/ShardoolParthak.png",
            Name: "Shardool Parthak",
            Title: "Secretary",
		},
		{
            imgLocation: "./images/Leaders/ArielSimnegar.png",
            Name: "Ariel Simnegar",
            Title: "Treasurer",
		},
		{
            imgLocation: "./images/Leaders/BenjaminXu.png",
            Name: "Benjamin Xu",
            Title: "Head of Web Development",
		},
		{
            imgLocation: "./images/Leaders/AndrewDunhom.png",
            Name: "Andrew Dunhom",
            Title: "Head of Marketing Logistics",
		},
		{
            imgLocation: "./images/Leaders/AayushiBerry.png",
            Name: "Aayushi Berry",
            Title: "Head of Marketing",
        },
    ]
	return (
		<div className="About">
			<NaviBar />
			<header className="about-header-section">
				<h2>Our Leaders</h2>
				<MaterialCards leaders={leaders1}></MaterialCards>
			</header>
			<section className="about-icpc-section">
				<h2>ICPC</h2>
				<ICPCLeaders />
			</section>
			<section className="about-ml-section">
				<h2>Machine Learning</h2>
				<MLLeaders />
			</section>
			<section className="about-design-section">
				<h2>Design</h2>
				<DesignLeaders />
			</section>
			<section className="about-gamedev-section">
				<h2>Game Development</h2>
				<GamedevLeaders />
			</section>
			<section className="about-blockchain-section">
				<h2>Blockchain</h2>
				<BlockchainLeaders />
			</section>
			<BotNaviBar />
		</div>
	);
}



export default About;
