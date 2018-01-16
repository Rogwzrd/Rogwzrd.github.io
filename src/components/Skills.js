import React from 'react';
import Col from "./Col"

const Skills = props => (
    <Col columnSize={"col-12 col-sm-6 col-md-4 mt-2 d-flex justify-content-center"}>
           <img className={"img-responsive"} src={require(`./img/${props.image}`)}/>
            <h4>{props.name}</h4>
    </Col>
);

export default Skills;