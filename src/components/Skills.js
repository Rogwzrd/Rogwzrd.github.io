import React from 'react';

const Skills = props => (
    <div className={"col-12 col-sm-6 col-md-4 mt-2 d-flex justify-content-center"}>
        <img style={{maxHeight: "200px", width: "auto"}} className={"img-responsive"} src={require(`./img/${props.image}`)} alt={props.name}/>
        <h4>{props.name}</h4>
    </div>
);

export default Skills;