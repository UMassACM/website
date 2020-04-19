import React from 'react';
import '../../../App.css';
import { List, ListItem } from '@material-ui/core'

function DesignLeaders() {
	return (
		<div className="DesignLeaders">
			<section >
				<List className="design-leaders">

					<ListItem>
						<List>
							<ListItem>
								<img className="design-leaders-img"
									src="./images/Design/Leaders/DhruvKrishna.png" alt='Dhruv Krishna'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Dhruv Krishna</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">President</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="design-leaders-img"
									src="./images/Design/Leaders/IsabelleTjokrosetio.png" alt='Isabelle Tjokrosetio'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Isabelle Tjokrosetio</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Vice President</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="design-leaders-img"
									src="./images/Design/Leaders/IanAdler.png" alt='Ian Adler'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Ian Adler</p>
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



export default DesignLeaders;