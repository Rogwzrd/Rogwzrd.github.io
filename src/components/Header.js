import React from 'react';
import Col from './Col'

const inlineStyle={display: "inline", textdecoration: "none"};
const Header = props =>(

    <div className={"container-fluid sticky-top"}>
        <div className={'row d-flex justify-content-between px-3'} style={{color: "#595959", backgroundColor: "#adccff", height: "auto", boxShadow: "5px 5px 5px grey"}}>
            <div>
                <h1>Mike Daye | Developer</h1>
            </div>
            <div className={"align-self-center"}>
                <a className={"mx-1"} href={"https://github.com/Rogwzrd"} target={"_blank"}>Github</a>
                <a className={"mx-1"} href={'https://www.linkedin.com/in/michael-daye/'} target={"_blank"}>linkedin</a>
                <a className={"mx-1"} href={'twitter.com/mikeD_Developer'} target={"_blank"}>twitter</a>
            </div>
        </div>
    </div>
);

export default Header;
