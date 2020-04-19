import React from 'react';
import '../App.css';
import NaviBar from './NaviBar';
import BotNaviBar from './BotNaviBar';
import ICPCLeaders from './sigs/ICPC/Leaders'
import BlockchainLeaders from './sigs/Blockchain/Leaders'
import GamedevLeaders from './sigs/Gamedev/Leaders'
import DesignLeaders from './sigs/Design/Leaders'
import MLLeaders from './sigs/ML/Leaders'
import { List, ListItem } from '@material-ui/core'

function About() {
	return (
		<div className="About">
			<NaviBar />
			<header className="about-header-section">
				<h2>Our Leaders</h2>
				<List className="leaders">

					<ListItem>
						<List>
							<ListItem>
								<img className="leaders-img"
									src="./images/Leaders/AyushKhandewal.png" alt='Ayush Khandewal'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Ayush Khandewal</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Chair</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="leaders-img"
									src="./images/Leaders/SaakshatSingh.png" alt='Saakshat Singh'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Saakshat Singh</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Vice Chair</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="leaders-img"
									src="./images/Leaders/ShardoolParthak.png" alt='Shardool Parthak'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Shardool Parthak</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Secretary</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="leaders-img"
									src="./images/Leaders/ArielSimnegar.png" alt='Ariel Simnegar'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Ariel Simnegar</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Treasurer</p>
							</ListItem>
						</List>
					</ListItem>
				</List>

				<List className="leaders">

					<ListItem>
						<List>
							<ListItem>
								<img className="leaders-img"
									src="./images/Leaders/BenjaminXu.png" alt='Benjamin Xu'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Benjamin Xu</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Head of Web Development</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="leaders-img"
									src="./images/Leaders/AndrewDunhom.png" alt='Andrew Dunhom'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Andrew Dunhom</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Head of Marketing Logistics</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="leaders-img"
									src="./images/Leaders/AayushiBerry.png" alt='Aayushi Berry'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Aayushi Berry</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Head of Marketing</p>
							</ListItem>
						</List>
					</ListItem>
				</List>
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
