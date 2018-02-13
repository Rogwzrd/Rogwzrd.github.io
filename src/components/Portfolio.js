import React,{Component} from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';

class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            shadow: 1
        };
    }

    onMouseOver=()=>{
        this.setState({shadow: 5})
    };

    onMouseOut=()=>{
        this.setState({shadow: 1})
    };
    render() {
        return(
            <div className={"col-12 col-md-6 col-xl-4"}>
                <div className={"mx-auto"}>
                    <a href={this.props.url} target={"_blank"} style={{textDecoration: "none"}}>
                        <Card style={{margin: "10%"}}
                              onMouseOver={this.onMouseOver}
                              onMouseOut={this.onMouseOut}
                              zDepth={this.state.shadow}>
                            <CardHeader title={this.props.title} subtitle={this.props.subtitle}/>
                            <CardMedia>
                                <img src={require(`./img/${this.props.imgSrc}`)} alt="portfolio screenshot"/>
                            </CardMedia>
                            <CardText>
                                {this.props.commentBox}
                            </CardText>
                        </Card>
                    </a>
                </div>
            </div>
        )
    }
}

export default Portfolio;