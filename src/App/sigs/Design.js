import React from 'react';
import '../../App.css';
import { SigHeader, PageSocial, MaterialCards } from './CommonSig';
import BotNaviBar from '../BotNaviBar';

function DesignLeaders() {
    const leaders1 = [
        {
            imgLocation: "../images/Design/Leaders/DhruvVikramKrishna.png",
            Name: "Dhruv Vikram Krishna",
            Title: "President",
        },
        {
            imgLocation: "../images/Design/Leaders/TenzinIngsel.png",
            Name: "Tenzin Ingsel",
            Title: "Vice President",
        },
        {
            imgLocation: "../images/Design/Leaders/GabyNugent.png",
            Name: "Gaby Nugent",
            Title: "Projects Chair",
        },
        {
            imgLocation: "../images/Design/Leaders/AleahCremer.png",
            Name: "Aleah Cremer",
            Title: "Programs Chair",
        },
        {
            imgLocation: "../images/Design/Leaders/RoshanShetty.png",
            Name: "Roshan Shetty",
            Title: "Outreach Chair",
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
            <SigHeader signame="Welcome to UMass Design!" sig="Also an updated description: We're the group for graphic design and product design at UMass Amherst! We host events like competitions and keynotes, where you can show off/learn more design skills. We also do challenges and partake in design competitions with each other. Join our Discord to be part of the community!" />
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
