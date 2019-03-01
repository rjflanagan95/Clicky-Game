import React, { Component } from "react";
// import "./style.css";

class Image extends Component {
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

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <img src={require("./planet-remix-fixed.svg")}/>
      </div>
    );
  }
}

export default Image;
