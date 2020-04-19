import React from 'react';
import '../App.css';
import NaviBar from './NaviBar';
import { Button } from '@material-ui/core';
import {List} from '@material-ui/core';
import {
  Link
} from "react-router-dom";
import BotNaviBar from './BotNaviBar';

function Home() {
  return (
    <div className="Home">
      <NaviBar />
      <header className="home-header-section">
        <p data-rte-preserve-empty="true" style={{ 'white-space': 'pre-wrap' }}></p>
        <p data-rte-preserve-empty="true" style={{ 'white-space': 'pre-wrap' }}></p>
        <p data-rte-preserve-empty="true" style={{ 'white-space': 'pre-wrap' }}></p>
        <h3>Connecting students and technology</h3>
        <h2 style={{ 'text-align': 'center', 'white-space': 'pre-wrap' }}>UMass Amherst Association of Computing Machinery</h2>
      </header>
      <section className="home-sigs-section">
        <h2>Our SIGs</h2>
        <h4>Click on an image to check out the SIG</h4>
        <p data-rte-preserve-empty="true" style={{ 'white-space': 'pre-wrap' }}></p>

        <List className="sigs-group">
          <List className="sigs-item">
            <Link to="/sigs/icpc"><img className="sigs-item-img" src="./images/ICPC/icpc.png" alt='icpc'></img></Link>
            <p>ACM ICPC</p>
          </List>
          <List className="sigs-item">
            <Link to="/sigs/machinelearning"><img className="sigs-item-img" src="./images/ML/ml.png" alt='machinelearning'></img></Link>
            <p>ACM Machine Learning</p>
          </List>
          <List className="sigs-item">
            <Link to="/sigs/blockchain"><img className="sigs-item-img" src="./images/Blockchain/blockchain.png" alt='blockchain'></img></Link>
            <p>ACM Blockchain</p>
          </List>
          <List className="sigs-item">
            <Link to="/sigs/gamedevelopment"><img className="sigs-item-img" src="./images/Gamedev/gamedevelopment.png" alt='gamedevelopment'></img></Link>
            <p>ACM Game Development</p>
          </List>
          <List className="sigs-item">
            <Link to="/sigs/design"><img className="sigs-item-img" src="./images/Design/design.png" alt='design'></img></Link>
            <p>ACM Design</p>
          </List>
        </List>
      </section>
      <section className="home-companies-section">
      <h2>Who we’ve worked with.</h2>
        <List className="companies-list">
          <img class="companies_img" src="./images/Companies/facebook.png" alt='facebook'></img>
          <img class="companies_img" src="./images/Companies/google.png" alt='google'></img>
          <img class="companies_img" src="./images/Companies/cisco.png" alt='cisco'></img>
          <img class="companies_img" src="./images/Companies/mathlab.png" alt='mathlab'></img>
        </List>
      </section>
      <section class="home-join-section">
        <h1>Add some tech to your resume</h1>
        <h3>Inquiries</h3>
        <h4>umassacm@gmail.com</h4>
        <Button variant="contained" size="large"><Link to="/join" className='home-text-link'>Join</Link></Button>
      </section>
      <BotNaviBar />
    </div>
  );
}


export default Home;