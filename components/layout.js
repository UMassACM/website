import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Head from "next/head";
import Footer from "./footer";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import utilStyles from "../styles/utils.module.css";

import styles from "./layout.module.css";
import { AnimatedSocialIcon } from "react-animated-social-icons";

const siteTitle = "UMass ACM";

export default function Layout({ children, home, index }) {
  return <div className={styles.container}>{children}</div>;
}

export class GlobalLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        
        <div className="layout">
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="UMass ACM" />
            <meta
              property="og:image"
              content={`https://og-image.now.sh/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=yes"
            />
          </Head>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">UMass ACM</Navbar.Brand>
            <Nav className="mr-auto">
              <NavDropdown className="nav-item dropdown" title="Sigs">
                <NavDropdown.Item href="/sigs/ICPC">ICPC</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/Blockchain">Blockchain</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/Design">Design</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/Product-Management">Product Management</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/ML">Machine Learning</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/Game-Development">Game Development</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/officers">Team</Nav.Link>
              <Nav.Link href="/Alumni">Alumni</Nav.Link>
            </Nav>
            <BrowserView>
              <Nav>
                <Navbar.Collapse className="justify-content-end mx-5 my-2">
                  <AnimatedSocialIcon
                    brandName="linkedin"
                    url="http://linkedin.com/company/umass-acm/"
                    animation="float"
                    defaultColor="#881c1c"
                    hoverColor="black"
                    width="2.5em"
                    animationDuration={0.2}
                    style={{ padding: "5%" }}
                  />
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end mx-5 my-2">
                  <AnimatedSocialIcon
                    brandName="discord"
                    url="https://discord.gg/G5umPQa"
                    animation="float"
                    defaultColor="#881c1c"
                    hoverColor="black"
                    width="2.5em"
                    animationDuration={0.2}
                    style={{ padding: "5%" }}
                  />
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end mx-5 my-2">
                  <AnimatedSocialIcon
                    brandName="facebook"
                    url="https://www.facebook.com/groups/umassacm/"
                    animation="float"
                    defaultColor="#881c1c"
                    hoverColor="black"
                    width="2.5em"
                    animationDuration={0.2}
                    style={{ padding: "5%" }}
                  />
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end mx-5 my-2 ">
                  <AnimatedSocialIcon
                    brandName="instagram"
                    url="https://www.instagram.com/umass_acm/"
                    animation="float"
                    defaultColor="#881c1c"
                    hoverColor="black"
                    width="2.5em"
                    animationDuration={0.2}
                    style={{ padding: "5%" }}
                  />
                </Navbar.Collapse>
              </Nav>
            </BrowserView>
          </Navbar>
          {children}
          <div>
          <MobileView>

            <center><h2 className={`${utilStyles.headingXl} ${utilStyles.umassColor}`}>ACM Socials</h2></center>
            <Footer>
              <AnimatedSocialIcon
                brandName="linkedin"
                url="http://linkedin.com/company/umass-acm/"
                animation="float"
                defaultColor="#881c1c"
                hoverColor="black"
                width="2.5em"
                animationDuration={0.2}
                style={{ padding: "5%" }}
              />
              <AnimatedSocialIcon
                brandName="discord"
                url="https://discord.gg/G5umPQa"
                animation="float"
                defaultColor="#881c1c"
                hoverColor="black"
                width="2.5em"
                animationDuration={0.2}
                style={{ padding: "5%" }}
              />
              <AnimatedSocialIcon
                brandName="facebook"
                url="https://www.facebook.com/groups/umassacm/"
                animation="float"
                defaultColor="#881c1c"
                hoverColor="black"
                width="2.5em"
                animationDuration={0.2}
                style={{ padding: "5%" }}
              />
              <AnimatedSocialIcon
                brandName="instagram"
                url="https://www.instagram.com/umass_acm/"
                animation="float"
                defaultColor="#881c1c"
                hoverColor="black"
                width="2.5em"
                animationDuration={0.2}
                style={{ padding: "5%" }}
              />
            </Footer>
          </MobileView>
          </div>
        </div>
        
          
      </div>
    );
  }
}
