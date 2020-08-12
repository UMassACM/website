import React from 'react';
import '../../App.css';
import { SigHeader, PageSocial, MaterialCards } from './CommonSig';
import BotNaviBar from '../BotNaviBar';

function DesignLeaders() {
    const leaders1 = [
        {
            imgLocation: "../images/Design/Leaders/DhruvKrishna.png",
            Name: "Dhruv Krishna",
            Title: "President",
        },
        {
            imgLocation: "../images/Design/Leaders/IsabelleTjokrosetio.png",
            Name: "Isabelle Tjokrosetio",
            Title: "Vice President",
        },
        {
            imgLocation: "../images/Design/Leaders/IanAdler.png",
            Name: "Ian Adler",
            Title: "Secretary",
        },
    ]
    return (
        <MaterialCards subCSS="design-leaders" imgCSS="design-leaders-img" leaders={leaders1}></MaterialCards>
    );
}

function Design() {
    const socials = [
        { Name: "Discord", webUrl: "https://discord.gg/vPzKH9F" },
        { Name: "Email: umassUX@gmail.com", webUrl: "null" },
    ]
    return (
        <div>
            <SigHeader signame="Welcome to UMass Design!" sig="We’re the Graphic and Product Design Club at UMass Amherst! We're building a community for people to learn design and talk to other people about it. We host bi-weekly meetings and also two big design focused events every semester! " />
            <div className="sig-section">
                <DesignLeaders />
            </div>
            <PageSocial socials={socials} />
            <BotNaviBar></BotNaviBar>
        </div>
    );
}
export { DesignLeaders }
export default Design;
