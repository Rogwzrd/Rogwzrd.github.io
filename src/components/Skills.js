import React from 'react';

const skillColumn = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}
const Skills = props => (
    <div className={"col-12 col-sm-6 mb-2 d-flex align-items-center"}>
        <div className={"container-fluid"}>
            <div className={"row d-flex"}>
                <div className={"col-6 d-flex justify-content-center align-items-center"}>
                    <img style={{maxWidth: "128px", height: "auto"}} className={"img-responsive"} src={require(`./img/${props.image}`)} alt={props.name}/>
                </div>
                <div className={"col-6 d-flex justify-content-center align-items-center"}>
                    <div style={skillColumn}><h4>{props.name}</h4>
                    <p>Proficiency: {props.proficiency}</p></div>
                </div>
            </div>
        </div>
    </div>
);

export default Skills;