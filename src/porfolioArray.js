const porfolioArray =[
    {
        url: "https://calm-depths-52315.herokuapp.com/",
        title: "NPR Scraper",
        subtitle: "JavaScript, Node.js, Express, MongoDb, Bootstrap",
       imgSrc:"scraper.png",
        commentbox:"This project is a full stack application that uses Handlebars, Mongodb, Mongoose, Morgan, and cheerio to\n" +
        "                scrape the NPR webpage to scrap articles to a database. From there users can then select specific articles\n" +
        "                to save for to view later and also add notes. The users can also update and/or delete these notes.\n",
    },
    {
        url: "http://tcg-app.herokuapp.com/",
        title: "TCG Organizer",
        subtitle: "JavaScript, Node.js, Bootstrap, Handlebars.js, Express.js, MySql, Sequelize",
        imgSrc:"tcg.png",
        commentbox:`This is a deck building application for the Pokemon trading card game. Users have the
                            ability to search for cards and then add them to decks. Users can then view fully built decks
                            and delete them if they choose. i designed each page layout and built the architecture of each
                            page in handlebars.  Some key features that I believe really help the user navigate the site are
                            the helper text that comes up when the user adds a card to the deck and also the semantic delete
                            button that is nested in the upper right hand corner of cards on the deck list display page.`,
    },
    {
        url: "https://rogwzrd.github.io/trivia-game/",
        title: "Capcom Trivia",
        subtitle: "JavaScript, jQuery",
        imgSrc: "capcom.png",
        commentbox:`This was one of my first projects as a developer. My goal was to provide a fun and
                        nostalgic experience with one of my favorite video game company's history. I added familiar music,
                        sound effects, and images to help engage the user and also provide feedback for the users on click
                        events. `,
    },
    {
        url: "https://rogwzrd.github.io/clicky-game/",
        title: "Super Click Fighter",
        subtitle: "React, Bootstrap",
        imgSrc: "clickfighter.png",
        commentbox:`This is a click based memory game built with react. The user clicks on a character's face to score points.
         But when they do, the tiles shuffle. The user has to pick another tile without choosing one that was previously clicked. See if you can get to 12 points.`,
    },
    {
        url: "https://obscure-sea-66375.herokuapp.com/",
        title: "Friend Finder",
        subtitle: "JavaScript, Node.js, Express.js",
        imgSrc: "friendfinder.png",
        commentbox:`This application is a survey that helps you find a new friend. You are prompted to enter your name and a link to an image of yourself.
         You then can answer the survey to have the application compare your answers to a number of other survey takers. You will 
         then see a modal fire that has the image and name of survey taker that has the least difference in answers submitted compared to yours. `,
    },
    {
        url: "https://github.com/Rogwzrd/liri-node-app/",
        title: "LIRI",
        subtitle: "JavaScript, Node.js",
        imgSrc: "liri.png",
        commentbox:`Liri is a command line application that is very similar to Siri. Instead of taking vocal commands like 
        Siri, Liri takes text commands. Commands given to Liri will either make queries to the spotify, twitter, or the omdb api`,
    }

];

export default porfolioArray;