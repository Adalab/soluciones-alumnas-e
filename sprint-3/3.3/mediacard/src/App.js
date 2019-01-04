import React, { Component } from 'react';
import profilepic from './maria.png';
import './App.scss';

class App extends Component {
  render() {
    const h1 = <h1 className="Name">Alex Guerrero</h1>;
    const header = (
      <header className="App-header">
          <img className="Img" src={profilepic} alt="profile pic"></img>
          <div className="Profile">
            {h1}
            <p className="Date">Lunes 26 de junio de 2017</p>
          </div>
      </header>
    );
    const main = (
      <main className="App-main">
          <p className="Main-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis ex excepturi, quam delectus corrupti incidunt velit praesentium accusamus voluptatem vel commodi cumque atque molestiae illo fuga illum unde magnam.
          </p>
          <div className="More">
            <p className="More-info"><a className="Link" href="https://www.adalab.es">Leer más...</a></p>
            <div className="Likes">
              <p className="Number-likes">37</p>
              <span><i class="Icon fas fa-heart"></i></span>
            </div>
          </div>
      </main>
    );
    const divPage = (<div className="App">{header} {main}</div>);
    
    return divPage;
  }
}

export default App;
