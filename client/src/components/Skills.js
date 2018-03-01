import React from 'react';
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

const paperStyle={
    height: "100pz",
    width: "250px",
    margin: "20px",
    padding: "10px",
    transition: "background-color ease 200ms",
    WebkitTransition: "background-color ease 200ms",
    backgroundColor: "#ccc"
};

const skillColumn = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "900"
};
const Skills = props => (
    <div className={"col-12 col-md-6 mb-2 d-flex align-items-center"}>
        <div className={"container-fluid"}>
            <div className={"row d-flex"}>
                <div className={"col-6 d-flex justify-content-center align-items-center"}>
                    <img style={{maxWidth: "128px", height: "auto"}} className={"img-responsive"} src={require(`./img/${props.image}`)} alt={props.name}/>
                </div>
                <div className={"col-6 d-flex justify-content-center align-items-center text-center"}>
                    <Paper zDepth={3} style={paperStyle} className={"newColor"}>
                        <div style={skillColumn}>
                            <h2>{props.name}</h2>
                            <Divider/>
                            <p>Proficiency: {props.proficiency}</p>
                        </div>
                    </Paper>
                </div>
            </div>
        </div>
    </div>
);

export default Skills;