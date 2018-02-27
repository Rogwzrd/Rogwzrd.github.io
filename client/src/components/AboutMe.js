import React, { Component } from 'react';
import twitterApi from "../utils/TwitterApi";

const aboutStyle = {
    backgroundColor: "grey",
};

export default class AboutMe extends Component{
    constructor(props){
        super(props);
        this.state = {
            tweets: []
        }
    }
    componentDidMount(){
    this.getTweets();
    }

    getTweets = () => {
        twitterApi.getMyTweets()
            .then(res => this.setState({tweets: res.statuses}))
            .catch(err=> console.log(err))
};
    render(){
        return(
            <div style={aboutStyle}>
                <h1>About Me</h1>
                <div>{this.state.tweets === ![] ? this.state.tweets : "No tweets to show"}</div>
            </div>
        )
    }
}
