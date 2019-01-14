import React, { Component } from 'react';
import imagen from './senor.jpg';
import './App.scss';
import './_vars.scss';

class App extends Component {
  render() {
    const header = (
      <div className="header">
        <img src={imagen} className="App-imagen" alt="imagen" />
        <div className="App-titles">
          <h1>Nombre Apellido</h1>
          <h2>Lunes 26 de junio de 2017</h2>
        </div>
      </div>
    );
    const pepe =(
    <p className="texto">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
    </p>
    );
    const footer =(
    <footer className="footer">
      <div className="footer-link">
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer más
        </a>
      </div>
      <div className="App-likes">
        <p className="numerito">37</p>
        <div className="corazon"><i class="fas fa-heart"></i></div>
      </div>
    </footer>
    );
    const contenido = (
    <div className="App">
      <main className="App-main">
        {header}
        {pepe}
        {footer} 
      </main>
  </div>)
    return contenido;
  }
}

export default App;
