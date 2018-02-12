import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Bio from './components/Bio'
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Footer from './components/Footer.js'
import Wrapper from './components/Wrapper'

//values for .map functions in skill and portfolio sections respectively
import skillsArray from "./skillsArray.js"
import porfolioArray from './porfolioArray'

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
                        rowClass={"row py-5"}
                        children={skillsArray.map((skill, index) => <Skills
                            key={index}
                            image={skill.image}
                            name={skill.name}
                        />)}/>

                    <Wrapper
                        title={"Projects"}
                        bgColor={"#28a745"}
                        containerClass={"container-fluid"}
                        rowClass={"row py-5"}
                        children={porfolioArray.map((project, index)=><Portfolio
                            key={index}
                            url={project.url}
                            title={project.title}
                            subtitle={project.subtitle}
                            imgSrc={project.imgSrc}
                            commentBox={project.commentbox}
                        />)}
                    />
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
