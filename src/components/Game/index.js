import React, { Component } from "react";
const images = [
    {
        "id" : 1,
        "src" : require("../Images/1.jpg"),
        "alt" : "Planet 1",
        "clicked": false 
    },
    {
        "id" : 2,
        "src" : require("../Images/2.jpg"),
        "alt" : "Planet 1",
        "clicked": false 
    },
    {
        "id" : 3,
        "src" : require("../Images/3.jpg"),
        "alt" : "Planet 1",
        "clicked": false 
    },
    {
        "id" : 4,
        "src" : require("../Images/4.png"),
        "alt" : "Planet 1",
        "clicked": false 
    },
    {
        "id" : 5,
        "src" : require("../Images/5.jpg"),
        "alt" : "Planet 1",
        "clicked": false 
    },
    {
        "id" : 6,
        "src" : require("../Images/6.gif"),
        "alt" : "Planet 1",
        "clicked": false 
    },
    {
        "id" : 7,
        "src" : require("../Images/7.jpg"),
        "alt" : "Planet 1",
        "clicked": false 
    },
    {
        "id" : 8,
        "src" : require("../Images/8.png"),
        "alt" : "Planet 1",
        "clicked": false 
    },
    {
        "id" : 9,
        "src" : require("../Images/9.svg"),
        "alt" : "Planet 1",
        "clicked": false 
    },

]
// import "./style.css";

class Game extends Component {
  // Setting the component's initial state

  state = {
      images,
      score: 0,
      topScore: 0,
      clickedImages: []
  };

    handleClick = imgID => {
        if (this.state.clickedImages.indexOf(imgID) !== -1) {
            this.setState({ score: 0, topScore: 0, clickedImages: [] });
            alert("You lost :(");
        } else {
            this.setState({ score: this.state.score + 1, clickedImages: this.state.clickedImages.concat(imgID)}, () => {
                if (this.state.score >= this.state.topScore) {
                    this.setState({ topScore: this.state.score });
                }
                this.checkScore();
            });
        }
    }

    checkScore = () => {
        if (this.state.score === 9) {
            alert("You won!");
            this.setState({ score: 0, topScore: 0, clickedImages: [] });

        }
    }

    render() {
        return (
            <div>
                <p>Current score: {this.state.score}</p>
                <p>Top score: {this.state.topScore}</p>
                {this.state.images.map(item =>
                    <img onClick={() => this.handleClick(item.id)} key={item.id} id={item.id} alt={item.alt} style={{width:100,height:100}} src={item.src}/>
                )}
            </div>
        );
    }
}

export default Game;
