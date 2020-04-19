import React from 'react';
import '../../../App.css';
import { List, ListItem } from '@material-ui/core'

function GamedevLeaders() {
	return (
		<div className="GamedevLeaders">
			<section >
				<List className="gamedev-leaders">

					<ListItem>
						<List>
							<ListItem>
								<img className="gamedev-leaders-img"
									src="./images/Gamedev/Leaders/AlexVukovic.png" alt='Alex Vukovic'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Alex Vukovic</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">President</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="gamedev-leaders-img"
									src="./images/Gamedev/Leaders/VinayRamesh.png" alt='Vinay Ramesh'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Vinay Ramesh</p>
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



export default GamedevLeaders;