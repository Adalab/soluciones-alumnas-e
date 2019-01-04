import React, { Component } from 'react';
import cardImage from './icon.jpg';
import './App.scss';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

class App extends Component {
  render() {

    const firstPart = (
    <div className="card-name">
    <img className="card-image" src={cardImage}/>
    <div className="card-info">
      <h1 className="card-title">Mr. Patatas</h1>
      <p className="card-date">Viernes, 4 de enero (lee el cartel)</p>
    </div>
    </div>);

  const secondPart = (<p className="card-text">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis mauris nec erat facilisis, sed suscipit elit facilisis. Ut turpis risus, pulvinar at blandit ut, tempus ac tellus. Praesent vehicula volutpat leo, ac posuere lacus malesuada non. Proin maximus rhoncus vestibulum.
  </p>);

  const thirdPart = (<div className="card-bottom">
    <a href="" className="card-link">Leer más...</a>

    <div className="faves">
      <span className="card-faves">37</span>
      <span className="heart"><FontAwesomeIcon icon="heart"/></span>
    </div>
  </div>)


    const allCard = (
      <div className="App">
        <div className="media-card">
        {firstPart}
        {secondPart}
        {thirdPart}
        </div>
      </div>
    );

    return allCard;
  }
}

export default App;
