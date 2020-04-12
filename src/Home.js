import React from 'react';
import './Home.css';
import NaviBar from './NaviBar';
import { Button } from '@material-ui/core';
import {
  Link
} from "react-router-dom";
import BotNaviBar from './BotNaviBar';

function Home() {
  return (
    <div className="Home">
      <NaviBar />
      <header className="Home-header">
        <h3>Connecting students and technology</h3>
        <h2>UMass Amherst Association of Computing Machinery</h2>
      </header>
      <section className="sigs">
        <h2>Our SIGs</h2>
        <h4>Click on an image to check out the SIG</h4>
        <ul className="sigs-group">
          <ul className="sigs-item">
            <Link to="/icpc"><img src="./images/icpc.png" alt='icpc'></img></Link>
            <p>ACM ICPC</p>
          </ul>
          <ul className="sigs-item">
            <Link to="/machinelearning"><img src="./images/ml.png" alt='machinelearning'></img></Link>
            <p>ACM Machine Learning</p>
          </ul>
          <ul className="sigs-item">
            <Link to="/blockchain"><img src="./images/blockchain.png" alt='blockchain'></img></Link>
            <p>ACM Blockchain</p>
          </ul>
          <ul className="sigs-item">
            <Link to="/gamedevelopment"><img src="./images/gamedevelopment.png" alt='gamedevelopment'></img></Link>
            <p>ACM Game Development</p>
          </ul>
          <ul className="sigs-item">
            <Link to="/design"><img src="./images/design.png" alt='design'></img></Link>
            <p>ACM Design</p>
          </ul>
        </ul>
      </section>
      <section className="companies">
        <h2>Who we’ve worked with.</h2>
        <ul className='companies-list'>
          <img class="companies_img" src="./images/facebook.png" alt='facebook'></img>
          <img class="companies_img" src="./images/google.png" alt='google'></img>
          <img class="companies_img" src="./images/cisco.png" alt='cisco'></img>
          <img class="companies_img" src="./images/mathlab.png" alt='mathlab'></img>
        </ul>
      </section>
      <section class="join-section">
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