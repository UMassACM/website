import React from 'react';
import './BotNaviBar.css';

function BotNaviBar() {

	return (
		<div className="BotNaviBar">
			<div className="BotNaviBar-navibar">
				<ul className='bot-list-social'>
					<a className='bot-text-link' href="https://www.facebook.com/groups/umassacm/" id="yui_3_17_2_1_1586682144845_423"><strong>Facebook</strong></a>
					<a className='bot-text-link' href="http://linkedin.com/company/umass-acm/"><strong>LinkedIn</strong></a>
					<a className='bot-text-link' href="https://discord.gg/G5umPQa"><strong>Discord</strong></a>
					<a className='bot-text-link' href="https://umassacm.slack.com/"><strong>Slack</strong></a>
					<a className='bot-text-link' href="https://www.instagram.com/umass_acm/"><strong>Instagram</strong></a>
				</ul>

			</div>
		</div>
	);
}

export default BotNaviBar;
