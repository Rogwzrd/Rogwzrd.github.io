import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Bio from './components/Bio'
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe.js"
import Footer from './components/Footer.js'
import Wrapper from './components/Wrapper'

//values for .map functions in skill and portfolio sections respectively
import skillsArray from "./skillsArray.js"
import portfolioArray from './portfolioArray'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Bio/>
                    <Wrapper
                        title={"Skills"}
                        bgColor={"#aaa"}
                        containerClass={"container"}
                        rowClass={"row pt-2 pb-5"}
                        children={
                            skillsArray.map((skill, index) => <Skills
                            key={index}
                            image={skill.image}
                            name={skill.name}
                            proficiency={skill.proficiency}
                        />)}
                    />
                    <Wrapper
                        title={"Projects"}
                        bgColor={"#28a745"}
                        containerClass={"container-fluid"}
                        rowClass={"row pt-2 pb-5"}
                        children={
                            portfolioArray.map((project, index)=><Portfolio
                            key={index}
                            url={project.url}
                            title={project.title}
                            subtitle={project.subtitle}
                            imgSrc={project.imgSrc}
                            commentBox={project.commentbox}
                        />)}
                    />
                    <AboutMe/>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
