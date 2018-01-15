import React, { Component } from 'react';
import Bio from './components/Bio'
import Header from './components/Header.js'
import Portfolio from "./components/Portfolio";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Skills from "./components/Skills";
import skillsArray from "./skillsArray.js";
import porfolioArray from './porfolioArray'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Header />
                <Bio/>
                <div className={"container-fluid"}>
                    <div className={"row my-3"}>
                {skillsArray.map((skill, index) => <Skills key={index} image={skill.image}/>)}
                </div>
                </div>
                <div className={"container-fluid bg-light"}>
                    <div className={"row"}>
                        {porfolioArray.map((project, index)=> <Portfolio
                            key={index}
                            url={project.url}
                            title={project.title}
                            subtitle={project.subtitle}
                            imgSrc={project.imgSrc}
                            commentBox={project.commentbox}
                        />)}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
