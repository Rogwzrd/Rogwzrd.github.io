import React from 'react';
import Col from'./Col'
const Bio = props =>(
    <div className={"d-flex bg-light"} style={{minHeight: "660px", color: "#595959"}}>
        <div className={"container justify-space-around align-self-center"}>
            <div className={"row"}>
                <Col columnSize={"col-12 text-center"}>
                    <div className={"mx-auto d-flex justify-space-around"}>
                        <div className={"align-self-center"}>
                            <h1 className={"font-weight-bold"}>Mike Daye</h1>
                            <h3 className={"font-weight-bold"}>Developer</h3>
                            <p>I am a passionate life-long learner seeking success in the field of Web Development. I have many
                                years of experience in retail customer service and management. I am taking those skills, primarily
                                centered around nimble learning and adaptation, to learn new skills in the tech field.
                            </p>
                            <a href={"http://github.com/rogwzrd"} target={"_blank"}>View my code here</a>
                        </div>
                        <div className={"align-self-center"}>
                            <img className={"mx-auto img-responsive"} style={{display: "flex", width: "auto", maxHeight: "350px", borderRadius: "100%"}} src={require('./img/headshot.jpg')} alt={"workspace"}/>
                        </div>
                    </div>
                </Col>
            </div>
        </div>
    </div>

);

export default Bio;