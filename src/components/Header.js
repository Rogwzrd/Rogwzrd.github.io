import React from 'react';
import Col from './Col'

const inlineStyle={display: "inline", textdecoration: "none"};
const Header = props =>(

    <div className={'row sticky-top bg-light '} style={{height: "50px", boxShadow: "5px 5px 5px grey"}}>
        <Col columnSize={'col-12'} style={inlineStyle}>
            <div className={"d-flex justify-content-around"}>
                <a href={"https://github.com/Rogwzrd"} target={"_blank"}>Github</a>
                <a href={'https://www.linkedin.com/in/michael-daye/'} target={"_blank"}>linkedin</a>
                <a href={'twitter.com/mikeD_Developer'} target={"_blank"}>twitter</a>
            </div>
        </Col>
    </div>
);

export default Header;
