import React from 'react';
import '../../../App.css';
import { List, ListItem } from '@material-ui/core'

function BlockchainLeaders() {
	return (
		<div className="BlockchainLeaders">
			<section >
				<List className="blockchain-leaders">

					<ListItem>
						<List>
							<ListItem>
								<img className="blockchain-leaders-img"
									src="./images/Blockchain/Leaders/DanCline.png" alt='Dan Cline'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Dan Cline</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Co-chair</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="blockchain-leaders-img"
									src="./images/Blockchain/Leaders/SathvikBirudavolu.png" alt='Sathvik Birudavolu'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Sathvik Birudavolu</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Co-chair</p>
							</ListItem>
						</List>
					</ListItem>
                    
                    <ListItem>
						<List>
							<ListItem>
								<img className="blockchain-leaders-img"
									src="./images/Blockchain/Leaders/ApurvShah.png" alt='Apurv Shah'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Apurv Shah</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Vice Chair</p>
							</ListItem>
						</List>
					</ListItem>
                    
                    <ListItem>
						<List>
							<ListItem>
								<img className="blockchain-leaders-img"
									src="./images/Blockchain/Leaders/KalyanMaddieni.png" alt='Kalyan Maddieni'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Kalyan Maddieni</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Secretary</p>
							</ListItem>
						</List>
					</ListItem>

				</List>
			</section>
		</div>
	);
}



export default BlockchainLeaders;