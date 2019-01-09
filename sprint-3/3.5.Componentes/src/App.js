import React, { Component } from 'react';
import ItemList from './ItemList';
import './App.css';


const items = [

  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity:2,
    category: "Cereales",
    price: 5
  },
  {
    name: "Hamburguesa con queso",
    quantity: 1,
    category: "Fast-food",
    price: 15
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5
  },
  {
    name: 68,
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: "holaa"
  }
];

class App extends Component {
  render() {
    return (
      <ItemList items={items} />
    )}
}

export default App;
