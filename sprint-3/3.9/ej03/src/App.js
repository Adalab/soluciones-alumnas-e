import React, { Component } from "react";
import "./App.css";
import ItemList from "./components/ItemList";

const items = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
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
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items
    }
  }
  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <ItemList items={items} />
      </div>
    );
  }
}

export default App;
