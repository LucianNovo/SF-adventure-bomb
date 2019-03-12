import React, { Component } from 'react';
import './App.css';
import Idea from './Idea/Idea'


class App extends Component {
  state = {
    ideas: [
      ["Swing on the swing on Billy Goat Hill. Fuck everyone in line. It\'s your turn.","https://goo.gl/maps/tZ1XXfNi3ay"],
      ["Drive Scooters up and down the Vermont Street in Potrero Hill (use Scoot). It\'s not about being somewhere, its about having fun on the way there.","https://goo.gl/maps/E7hRDJFctbt"],
      ["Walk the Filbert steps. Enjoy the absence or presence of company. ","https://goo.gl/maps/cPoDy64J6Rx"],
      ["Start a book at City Lights and end up finishing the book at a nearby cafe. ", "https://goo.gl/maps/cqo8RdyWF8N2"],
      ["Go to the Moraga Steps to Grandview Park. Walk to the top with your best friend(s). Close your eyes, point somewhere random, then go there. ","https://goo.gl/maps/GEaEPi9zoqD2"],
      ["Do the jungle gym bars at Hayes and Octavia. Then get a pretzel at the beergarden.","https://goo.gl/maps/XbLyXNS41XL2"],
      ["Roller Skate at Church of Eight Wheels. You don\'t have to know how to skate to have fun. ","https://goo.gl/maps/vvqEhsCHFMA2"],
      ["Watch the White Elk at Pierce Point Ranch. Then write about it in your diary. ","https://goo.gl/maps/zqnCHvxycFG2"],
      ["Drive through the Cypress Tree Tunnel. It\'s aiiiight. Really I\'m just tricking you into going near Point Reyes. ","https://goo.gl/maps/hg9hvsDKSXT2"],
      ["Visit Point Reyes Light House. It\'s just pretty looking thanks to @carlthefog","https://goo.gl/maps/LpDM1eAcnEk"],
      ["Hike the Cataract Trail. It\'s a 5 hour hike you\'d prefer to do on a Saturday afternoon. The best part is eating dinner afterwards.","https://goo.gl/maps/P3VjhBrTCDN2"],
      ["Slide down the Steward Street Slide. Bring your own cardboard. Or a McDonalds tray. ","https://goo.gl/maps/8mKYPMvis2n"],
      ["Get a view of Union Square from the Weston Hotel Elevator. You\'ll feel like you\'re cool just for pretending to live there.","https://goo.gl/maps/3bNqhqNQner"],
      ["View the city from the De Young museum observatory tower. also they have a great museum cafeteria. ","https://goo.gl/maps/hJMfhJrSywR2"],
      ["Slide down the Hamilton Pool slides. Walk don\'t run. ","https://goo.gl/maps/DzVwPnVMaWp"],
      ["Go to the arcade at the Mechanical Museum. Be sure to bring quarters and your nerdy sense of competition. ","https://goo.gl/maps/A3exsnZAQjA2"],
      ["Go to a free comedy show. The comics are decent. If they're not, say so. ","https://goo.gl/FtMZYN"],
      ["Go to Fort Point. Not the brewery. The FORTRESS.","https://goo.gl/maps/KPWbVY5m4bK2"],
      ["Take a picture at the Painted Ladies. If you don't have a picture here you're not from SF","https://goo.gl/maps/whbqkFo4Cro"],
      ["Just. Drive.","https://goo.gl/45JX",]
      ["Host a bonfire at Ocean beach. Bring something to leave behind... ","goo.gl/whMpSS"],
      ["Go lawn bowling. It's easy to get into and there's a competitive vibe.","https://goo.gl/jWH5DM"]
    ],
    iterator: 0
  }

  render(){
    return (
      <div className="app">
        <div className="funstuff">{this.state.ideas[this.state.iterator][0]}</div>
        <div className="maplink">{this.state.ideas[this.state.iterator][1]}</div>
        <button onClick={this.changeIdea}>New Idea</button>
      </div>
    )
  }

  changeIdea = () => {
    if(this.state.iterator == (this.state.ideas.length-1)){
      this.setState({
        iterator: 0
      })
    }
    else
      this.setState({
        iterator: this.state.iterator + 1
      })
  }
};

export default App;
