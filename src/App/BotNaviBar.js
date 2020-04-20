import React from 'react';
import '../App.css';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

function BotNaviBar() {
	return (
		<div className="BotNaviBar">
			<div className="bottom-bar-navibar">
				<List className='bot-list-social'>
					<ListItem className='bot-list-social-item'><a style={{ 'text-align': 'center', 'white-space': 'pre-wrap' }} className='bottom-bar-text-link' href="https://www.facebook.com/groups/umassacm/"><strong>Facebook</strong></a></ListItem>
					<ListItem className='bot-list-social-item'><a style={{ 'text-align': 'center', 'white-space': 'pre-wrap' }} className='bottom-bar-text-link' href="http://linkedin.com/company/umass-acm/"><strong>LinkedIn</strong></a></ListItem>
					<ListItem className='bot-list-social-item'><a style={{ 'text-align': 'center', 'white-space': 'pre-wrap' }} className='bottom-bar-text-link' href="https://discord.gg/G5umPQa"><strong>Discord</strong></a></ListItem>
					<ListItem className='bot-list-social-item'><a style={{ 'text-align': 'center', 'white-space': 'pre-wrap' }} className='bottom-bar-text-link' href="https://umassacm.slack.com/"><strong>Slack</strong></a></ListItem>
					<ListItem className='bot-list-social-item'><a style={{ 'text-align': 'center', 'white-space': 'pre-wrap' }} className='bottom-bar-text-link' href="https://www.instagram.com/umass_acm/"><strong>Instagram</strong></a></ListItem>
				</List>

			</div>
		</div>
	);
}

export default BotNaviBar;
