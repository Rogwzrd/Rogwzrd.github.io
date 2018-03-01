import React, { Component } from 'react';

const aboutStyle = {
    backgroundColor: "grey",
};

class AboutMe extends Component{
    state = {
        tweets: []
    };
    componentDidMount(){
        this.getTweets();
    }

    getTweets = () => {
        fetch("api/", {method: "GET"})
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                this.setState({tweets: data.statuses})
            })
            .catch(err=> console.log(err));
        console.log(this.state.tweets)
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

export default AboutMe;