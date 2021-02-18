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
          {children}
          <MobileView>

            <center><h2 className={`${utilStyles.headingXl} ${utilStyles.umassColor}`}>ACM Socials</h2></center>
            <Footer>
              <AnimatedSocialIcon
                brandName="linkedin"
                url="http://linkedin.com/company/umass-acm/"
                animation="float"
                defaultColor="#9a3030"
                hoverColor="black"
                width="2.5em"
                animationDuration={0.2}
                style={{ padding: "5%" }}
              />
              <AnimatedSocialIcon
                brandName="discord"
                url="https://discord.gg/G5umPQa"
                animation="float"
                defaultColor="#9a3030"
                hoverColor="black"
                width="2.5em"
                animationDuration={0.2}
                style={{ padding: "5%" }}
              />
              <AnimatedSocialIcon
                brandName="facebook"
                url="https://www.facebook.com/groups/umassacm/"
                animation="float"
                defaultColor="#9a3030"
                hoverColor="black"
                width="2.5em"
                animationDuration={0.2}
                style={{ padding: "5%" }}
              />
              <AnimatedSocialIcon
                brandName="instagram"
                url="https://www.instagram.com/umass_acm/"
                animation="float"
                defaultColor="#9a3030"
                hoverColor="black"
                width="2.5em"
                animationDuration={0.2}
                style={{ padding: "5%" }}
              />
            </Footer>
          </MobileView>
        </div>
        
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">UMass ACM</Navbar.Brand>
            <Nav className="mr-auto">
              <NavDropdown className="nav-item dropup" title="Sigs">
                <NavDropdown.Item href="/sigs/icpc">ICPC</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/blockchain">Blockchain</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/design">Design</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/pm">Product Management</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/ml">Machine Learning</NavDropdown.Item>
                <NavDropdown.Item href="/sigs/game_dev">Game Development</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/Alumni">Alumni</Nav.Link>
            </Nav>
            <BrowserView>
              <Nav>
                <Navbar.Collapse className="justify-content-end mx-5 my-2">
                  <AnimatedSocialIcon
                    brandName="linkedin"
                    url="http://linkedin.com/company/umass-acm/"
                    animation="float"
                    defaultColor="#9a3030"
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
                    defaultColor="#9a3030"
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
                    defaultColor="#9a3030"
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
                    defaultColor="#9a3030"
                    hoverColor="black"
                    width="2.5em"
                    animationDuration={0.2}
                    style={{ padding: "5%" }}
                  />
                </Navbar.Collapse>
              </Nav>
            </BrowserView>
          </Navbar>
      </div>
    );
  }
}
