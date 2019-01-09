import React from 'react';
import HalfPage from './HalfPage'
import App from './App.css'

class Item extends React.Component {
  render() {
    return (
    <div className="content">
      <HalfPage styling="info">
        <h1>Welcome</h1>
        <p>Thank you for visiting our webpage!</p>
        <p>We hope you enjoy our new shiny site!</p>
     </HalfPage>

      <HalfPage styling="info">
        <h2>Welcome</h2>
        <p>Thank you for visiting our webpage!</p>
        <p>We hope you enjoy our new shiny site!</p>
      </HalfPage>
    </div>
    );
  }
}

export default Item;