import "./style.css";

import React, { Component } from "react";
import Navbar from "../Navbar";
import Header from "../Header";

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
            this.setState({ score: 0, clickedImages: [] });
            alert("You lost :(");
        } else {
            this.setState({ score: this.state.score + 1, clickedImages: this.state.clickedImages.concat(imgID)}, () => {
                if (this.state.score >= this.state.topScore) {
                    this.setState({ topScore: this.state.score });
                }
                this.checkScore();
            });
        }

        // shuffle images array here
    }

    checkScore = () => {
        if (this.state.score === 9) {
            alert("You won!");
            this.setState({ score: 0, topScore: 0, clickedImages: [] });
        } else {
            this.setState({ images : this.shuffleImages(this.state.images) });
        }
    }

    shuffleImages = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;

    }
    
    render() {
        return (
            <div>
                <Navbar score={this.state.score} topScore={this.state.topScore}/>
                <Header/>
                <div className="image-container">
                    {this.state.images.map(item =>
                        <img className="planet-image" onClick={() => this.handleClick(item.id)} key={item.id} id={item.id} alt={item.alt} style={{width:125,height:125}} src={item.src}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Game;
