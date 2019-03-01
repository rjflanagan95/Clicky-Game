import React, { Component } from "react";
// import "./style.css";

class Game extends Component {
  // Setting the component's initial state
//   state = {
//   };

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // this.setState({
    //   firstName: "",
    //   lastName: "",
    //   password: ""
    // });
//   };

    handleClick = event => {
        event.preventDefault();
        console.log("clicked");
    }

    render() {
        return (
            <div>
                <img onClick={this.handleClick} alt={"Planet 1"} style={{width:50,height: 50}} src={require("../Images/1.jpg")}/>
                <img onClick={this.handleClick} alt={"Planet 2"} style={{width:50,height: 50}} src={require("../Images/2.jpg")}/>
                <img onClick={this.handleClick} alt={"Planet 3"} style={{width:50,height: 50}} src={require("../Images/3.jpg")}/>
                <img onClick={this.handleClick} alt={"Planet 4"} style={{width:50,height: 50}} src={require("../Images/4.png")}/>
                <img onClick={this.handleClick} alt={"Planet 5"} style={{width:50,height: 50}} src={require("../Images/5.jpg")}/>
                <img onClick={this.handleClick} alt={"Planet 6"} style={{width:50,height: 50}} src={require("../Images/6.gif")}/>
                <img onClick={this.handleClick} alt={"Planet 7"} style={{width:50,height: 50}} src={require("../Images/7.jpg")}/>
                <img onClick={this.handleClick} alt={"Planet 8"} style={{width:50,height: 50}} src={require("../Images/8.png")}/>
                <img onClick={this.handleClick} alt={"Planet 9"} style={{width:50,height: 50}} src={require("../Images/9.svg")}/>
            </div>
        );
    }
}

export default Game;
