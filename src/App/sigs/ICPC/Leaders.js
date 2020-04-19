import React from 'react';
import '../../../App.css';
import { List, ListItem } from '@material-ui/core'

function ICPCLeaders() {
	return (
		<div className="ICPCLeaders">
			<section >
				<List className="icpc-leaders">

					<ListItem>
						<List>
							<ListItem>
								<img className="icpc-leaders-img"
									src="./images/ICPC/Leaders/AdityaAgarwal.png" alt='Aditya Agarwal'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Aditya Agarwal</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Chair</p>
							</ListItem>
						</List>
					</ListItem>

					<ListItem>
						<List>
							<ListItem>
								<img className="icpc-leaders-img"
									src="./images/ICPC/Leaders/SattwikDas.png" alt='Sattwik Das'></img>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Sattwik Das</p>
							</ListItem>
							<ListItem className="picture-caption-holder">
								<p className="picture-caption">Vice Chair</p>
							</ListItem>
						</List>
					</ListItem>	
				</List>
			</section>
		</div>
	);
}



export default ICPCLeaders;