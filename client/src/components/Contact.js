import React,{Component} from 'react';
import TextField from 'material-ui/TextField'
import RasisedButton from "material-ui/RaisedButton"

const contactStyle = {
    backgroundColor: "lightgrey",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const textFieldStyle = {
    borderColor: "black",
};

const buttonStyle = {
    margin: "30px 0"
};

class Contact extends Component{
    state={
        email: "",
        name: "",
        message: "",
        buttonBool : true,
    };

    handleFormChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
        this.isDisabled();
    };

    handleFormSubmit =(event)=>{
        event.preventDefault();
        const messageBody = Object.assign({},
            {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }
        );
        console.log(messageBody);
        console.log(this.state)
    };
    isDisabled = () =>{
        if(this.state.name !== "" && this.state.email !== ""&& this.state.message !== ""){
            this.setState({buttonBool: false})
        } else{
            this.setState({buttonBool: true})
        }
    };
    render(){
        return(
            <form style={contactStyle}>
                <h1>Contact me</h1>
                <TextField
                    underlineStyle={textFieldStyle}
                    floatingLabelText={"Email"}
                    hintText={"johnDoe@example.com"}
                    onChange={this.handleFormChange}
                    name={"email"}
                    value={this.state.email}
                    errorText={this.state.email === "" ? "this field is required" : null}
                />
                <TextField
                    underlineStyle={textFieldStyle}
                    floatingLabelText={"Name"}
                    hintText={"John Doe"}
                    onChange={this.handleFormChange}
                    name={"name"}
                    value={this.state.name}
                    errorText={this.state.name === "" ? "this field is required" : null}
                />
                <TextField
                    underlineStyle={textFieldStyle}
                    hintText={"Let's chat!"}
                    floatingLabelText={"Message"}
                    multiLine={true}
                    rows={2}
                    onChange={this.handleFormChange}
                    name={"message"}
                    value={this.state.message}
                    errorText={this.state.message === "" ? "this field is required" : null}
                />
                <RasisedButton
                    style={buttonStyle}
                    label={"Submit"}
                    primary={true}
                    onClick={this.handleFormSubmit}
                    disabled={this.state.buttonBool}
                />
            </form>
        )
    }
}

export default Contact;