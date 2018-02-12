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
            Please reach out if you are interested in working with me
        </p>
        <section style={sectionStyle}>
            <FlatButton
                label="Github"
                href={"https://github.com/Rogwzrd"}
                target={"_blank"}/>
            <br/>
            <FlatButton
                label="linkedIn"
                href={'https://www.linkedin.com/in/michael-daye/'}
                target={"_blank"}/>
            <br/>
            <FlatButton
                label="twitter"
                href={'http://www.twitter.com/mikeD_Developer'}
                target={"_blank"}/>
            <br/>
            <form method="post" action="mailto:mgdaye@gmail.com" >
                <FlatButton
                    label="Email Me"
                    type={"submit"}
                />
            </form>
        </section>
        <p style={copyrightText}>
            Mike Daye &copy; 2018
        </p>
    </div>
);

export default Footer;

