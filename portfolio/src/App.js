import React, { Component } from 'react';
import Bio from './components/Bio'
import Header from './components/Header.js'
import './App.css';
import Portfolio from "./components/Portfolio";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Header />
                <Bio/>
                <div className={"container"}>
                <div className={"row"}>
                    <Portfolio
                        url={"https://calm-depths-52315.herokuapp.com/"}
                        title={"NPR Scraper"}
                        subtitle={"Node.js, Express, MongoDb, Bootstrap"}
                        imgSrc={"scraper.png"}
                        commentBox={"This project is a full stack application that uses Handlebars, Mongodb, Mongoose, Morgan, and cheerio to\n" +
                        "                scrape the NPR webpage to scrap articles to a database. From there users can then select specific articles\n" +
                        "                to save for to view later and also add notes. The users can also update and/or delete these notes.\n"}
                    />
                    <Portfolio
                        url={"tcg-app.herokuapp.com/"}
                        title={"TCG Organizer"}
                        subtitle={"Node.js, Bootstrap, Handlebars.js, Express.js, MySql, Sequelize"}
                        imgSrc={"tcg.png"}
                        commentBox={`This is a deck building application for the Pokemon trading card game. Users have the
                            ability to search for cards and then add them to decks. Users can then view fully built decks
                            and delete them if they choose. i designed each page layout and built the architecture of each
                            page in handlebars.  Some key features that I believe really help the user navigate the site are
                            the helper text that comes up when the user adds a card to the deck and also the semantic delete
                            button that is nested in the upper right hand corner of cards on the deck list display page.`}
                    />
                    <Portfolio
                        url={"https://rogwzrd.github.io/trivia-game/"}
                        title={"Capcom Trivia"}
                        subtitle={"javascript, jquery"}
                        imgSrc={"capcom.png"}
                        commentBox={`This was one of my first projects as a developer. My goal was to provide a fun and
                        nostalgic experience with one of my favorite video game company's history. I added familiar music,
                        sound effects, and images to help engage the user and also provide feedback for the users on click
                        events. `}
                    />

                </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
