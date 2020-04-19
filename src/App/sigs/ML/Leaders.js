import React from 'react';
import '../../../App.css';
import { List, ListItem } from '@material-ui/core'

function MLLeaders() {
	return (
		<div className="MLLeaders">
			<section >
				<List className="ml-leaders">

					<ListItem>
						<List>
							<ListItem>
								<img className="ml-leaders-img"
									src="./images/ML/Leaders/CooperSigrist.png" alt='Cooper Sigrist'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Cooper Sigrist</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">President</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="ml-leaders-img"
									src="./images/ML/Leaders/RenosZabounidis.png" alt='Renos Zabounidis'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Renos Zabounidis</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Vice President</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="ml-leaders-img"
									src="./images/ML/Leaders/PrakharChaturvedi.png" alt='Prakhar Chaturvedi'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Prakhar Chaturvedi</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Secretary</p>
							</ListItem>
						</List>
					</ListItem>	

                    <ListItem>
						<List>
							<ListItem>
								<img className="ml-leaders-img"
									src="./images/ML/Leaders/ShreyansBabel.png" alt='Shreyans Babel'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Shreyans Babel</p>
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



export default MLLeaders;