import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const footerStyle = {
    backgroundColor: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 10%",
    textAlign: "center",
    color: "#999"
};

const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    margin: "0 5px",
    color: "white"
};
const copyrightText = {
    margin: "20px 0",
};

const Footer = () => (
    <div style={footerStyle}>
        <p>
            Thanks for visiting my portfolio!
        </p>
        <p>
            Reach out through one of the links below if you are interested in working with me.
        </p>
        <section style={sectionStyle}>
            <FlatButton
                href={"https://github.com/Rogwzrd"}
                target={"_blank"}>
                Github
            </FlatButton>
            <br/>
            <FlatButton
                href={'https://www.linkedin.com/in/michael-daye/'}
                target={"_blank"}>
                LinkedIn
            </FlatButton>
            <br/>
            <FlatButton
                href={'http://www.twitter.com/mikeD_Developer'}
                target={"_blank"}>
                Twitter
            </FlatButton>
            <br/>
            <form method="post" action="mailto:mgdaye@gmail.com" >
                <FlatButton
                    type={"submit"}>
                    Email Me
                </FlatButton>
            </form>
        </section>
        <p style={copyrightText}>
            Copyright &copy; 2018 Mike Daye
        </p>
    </div>
);

export default Footer;

