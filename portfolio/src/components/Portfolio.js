import React from 'react';
import Col from './Col'
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';


const Portfolio = props =>(

    <Col columnSize={"col-12 col-xl-6"}>
        <div className={"mx-auto"}>
            <a href={props.url} target={"_blank"} style={{textDecoration: "none"}}>
                <Card style={{margin: "10%"}}>
                    <CardHeader title={props.title} subtitle={props.subtitle}/>
                    <CardMedia>
                        <img src={require(`./img/${props.imgSrc}`)} alt="portfolio screenshot" />
                    </CardMedia>
                    <CardText>
                        {props.commentBox}
                    </CardText>
                </Card>
            </a>
        </div>

    </Col>
);

export default Portfolio;