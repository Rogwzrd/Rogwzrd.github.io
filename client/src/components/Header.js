import React from 'react';
import FlatButton from 'material-ui/FlatButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

const Header = props =>(
    <Toolbar style={{backgroundColor: "#28a745"}}>
        <ToolbarGroup>
                <ToolbarTitle style={{color: "#fff"}} text={"Mike Daye | Developer"}/>
        </ToolbarGroup>
        <ToolbarGroup>
            <div>
                <FlatButton href={"https://github.com/Rogwzrd"} target={"_blank"} hoverColor={"#fff"}>Github</FlatButton>
                <FlatButton href={'https://www.linkedin.com/in/michael-daye/'} target={"_blank"} hoverColor={"#fff"}>linkedin</FlatButton>
                <FlatButton href={'http://www.twitter.com/mikeD_Developer'} target={"_blank"} hoverColor={"#fff"}>twitter</FlatButton>
            </div>
        </ToolbarGroup>
    </Toolbar>
);

export default Header;
