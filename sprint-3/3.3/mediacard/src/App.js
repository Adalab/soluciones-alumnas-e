import React, { Component } from 'react';
import logo from './bitmoji-20181220115423.png';
import './App.scss';

class App extends Component {
  render() {
    const nameElement = <h1 className="User-name">Beatriz Gómez</h1>;
    const dateElement = <p className="Date">Viernes 4 de enero de 2019</p>;
    const imgElement = <img src={logo} className="App-logo" alt="logo" />
    const textElement = <p className="Text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, perferendis error! Sunt nobis accusamus vero impedit dolores dignissimos rerum, porro, ipsam laudantium cupiditate quod sint maiores ut corporis consectetur sit.
    </p>;
    const footerElements = <footer className="App-footer">
      <p className="More-info">Leer más...</p>
      <div>
        <p className="Likes">37 <i className="fas fa-heart"></i></p>
      </div>
    </footer>;


    const appRoot = (<div className="App">
      <header className="App-header">
        {imgElement}
        <div className="Title-container">
          {nameElement}
          {dateElement}
        </div>
      </header>
      <main className="App-main">
        {textElement}
      </main>
      {footerElements}
    </div>);
    return appRoot;
  }
}

export default App;
