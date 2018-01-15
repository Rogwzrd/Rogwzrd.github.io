import React from 'react';
import Col from "./Col"

const Skills = props => (
    <Col columnSize={"col-6 col-xl-4 d-flex justify-content-center"}>
           <img src={require(`./img/${props.image}`)}/>
            <h4>{props.name}</h4>
    </Col>
);

export default Skills;