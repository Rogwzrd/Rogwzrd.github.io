import React from 'react';
const bgImage = require("./img/codingBg.png");

const Bio = props =>(
    <div style={{textAlign: "center"}}>

        <div style={
            {
                position: "absolute",
                zIndex: "-1",
                height: "750px",
                width: "100%",
                background: `#333 url(${bgImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }
        }>
        </div>
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(10, 10, 10, .70)",
                color: "#fff",
                height: "750px",
                padding: "10%"

            }
        }>
            <img style={{borderRadius: "100%", height: "200px", width: "auto"}} src={require('./img/headshot.jpg')} alt={"headshot"}/>
            <h1 className={"font-weight-bold"}>Mike Daye</h1>
            <h3 className={"font-weight-bold"}>Developer</h3>
            <p>I am a passionate life-long learner seeking success in the field of Web Development. I have many
                years of experience in retail customer service and management. I am taking those skills, primarily
                centered around nimble learning and adaptation, to develop excellent web applications and provide top class
                client interactions.
            </p>
            <a style={{color: "#28a745", textDecoration:"none", fontWeight: "600"}} href={"http://github.com/rogwzrd"} target={"_blank"}>
                View my Github profile here
            </a>
        </div>
    </div>

);
export default Bio;