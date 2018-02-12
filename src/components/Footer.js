import React from 'react'
import FlatButton from 'material-ui/FlatButton'
const footerStyle = {
    backgroundColor: "#333"
};
const Footer = () => (
    <div style={footerStyle}>
        <div className={"container-fluid"}>
            <div className={'row py-5'}>
                <div className={"col-6 d-flex justify-content-center"}>
                    <FlatButton
                        label="My Github"
                        href={"https://github.com/Rogwzrd"}
                        target={"_blank"}/>
                    <FlatButton
                        label="linkedIn"
                        href={'https://www.linkedin.com/in/michael-daye/'}
                        target={"_blank"}/>
                    <br/>
                    <form method="post" action="mailto:mgdaye@gmail.com" >
                        <FlatButton
                        label="Email Me"
                        type={"submit"}
                        />
                    </form>
                    <FlatButton

                        label="twitter"
                        href={'http://www.twitter.com/mikeD_Developer'}
                        target={"_blank"}/>
                </div>
                <div className={"col-6 d-flex justify-content-center"}>
                    Thanks for visiting my portfolio! Please reach out if you are interested in working with me
                </div>
            </div>
        </div>
    </div>
);

export default Footer;

