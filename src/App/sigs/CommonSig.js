import React from 'react';
import '../../App.css';
import NaviBar from '../NaviBar';
import { GamedevLeaders } from './Gamedev';
import { List, ListItem, ListItemText } from '@material-ui/core'
import BotNaviBar from '../BotNaviBar';

import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function SigHeader(props) {
    return (
        <div className="sigs-general">
            <NaviBar />
            <div className="sigs-header">
                <div className='sigs-header-text'>
                    <h2>{props.signame}</h2>
                    <h4>{props.sig}</h4>
                </div>
            </div>
        </div>
    );
}

function LeaderTemplate(props) {
    return (
        <div>
            <section>
                <List className={props.subCSS}>
                    {props.leaders.map(el =>
                        <ListItem>
                            <List>
                                <ListItem>
                                    <img className={props.imgCSS} src={el.imgLocation} alt={el.Name}></img>
                                </ListItem>
                                <ListItem className="picture-caption-holder">
                                    <p className="picture-caption">{el.Name}</p>
                                </ListItem>
                                <ListItem className="picture-caption-holder">
                                    <p className="picture-caption">{el.Title}</p>
                                </ListItem>
                            </List>
                        </ListItem>)
                    }
                </List>
            </section>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        minWidth: 300,
    },
    media: {
        height: 300,
    },
    text: {
        color: "#9a3030",
        textAlign: "center",
    }

});
function MaterialCards(props) {
    const classes = useStyles();

    return (
        <div>
            <section>
                <Grid container spacing={5}
                    justify="space-evenly"
                    alignItems="center">
                    {props.leaders.map(el =>
                        <Grid item>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={el.imgLocation}
                                    />
                                    <CardContent className={classes.text}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {el.Name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {el.Title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                    }
                </Grid>
            </section>
        </div>

    );
}


function PageSocial(props) {
    return (
        <div>
            <h3 className="sig-socialbar-heading">Contact Information for this organization</h3>
            <div className="sig-socialbar">
                {props.socials.map(elem => {
                    if (elem.webUrl === 'null') {

                        return (
                            <List className='bot-list-social' >
                                <ListItem className='bot-list-social-item' button component="p">
                                    <ListItemText primary={elem.Name} />
                                </ListItem>
                            </List>
                        )

                    }
                    else {

                        return (
                            <List className='bot-list-social' >
                                <ListItem className='bot-list-social-item' button component="a" href={elem.webUrl}>
                                    <ListItemText primary={elem.Name} />
                                </ListItem>
                            </List>
                        )

                    }
                }
                )}
            </div>
        </div>
    )
}

function CS({ routes }) {
    const socials = [
        { Name: "Discord", webUrl: "https://www.discord.com" },
        { Name: "Instagram", webUrl: "https://www.instagram.com" },
    ]
    return (
        <div>
            <SigHeader signame="Sample" sig="description" />
            <div className="sig-section">
                <GamedevLeaders />
            </div>
            <PageSocial socials={socials} />
            <BotNaviBar></BotNaviBar>
        </div>
    );
}


export { SigHeader, LeaderTemplate, PageSocial, MaterialCards }
export default CS;