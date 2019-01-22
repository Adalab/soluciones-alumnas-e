import React, { Component } from "react";
import Item from "./Item";
import CategoryButton from "./CategoryButton";
import "../itemList.css";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredItems: []
    };
    this.filterItems = this.filterItems.bind(this);
    this.showAllProducts = this.showAllProducts.bind(this);
  }

  filterItems(category) {
    const { items } = this.props;
    const filteredItems = items.filter(item => item.category === category);
    this.setState({
      filteredItems: filteredItems
    });
  }

  showAllProducts() {
    this.setState({
      filteredItems: []
    });
  }

  render() {
    const { items } = this.props;
    const { filteredItems } = this.state;

    if (filteredItems.length === 0) {
      return (
        <div>
          <ul className="item-list">
            {items.map(item => {
              const { name, description, quantity, category, price } = item;
              return (
                <li key={name}>
                  <Item
                    name={name}
                    description={description}
                    quantity={quantity}
                    category={category}
                    price={price}
                  />
                </li>
              );
            })}
          </ul>
          <CategoryButton category="Cereales" filterItems={this.filterItems} />
          <CategoryButton category="Fast-food" filterItems={this.filterItems} />
          <CategoryButton category="Bebida" filterItems={this.filterItems} />
          <CategoryButton category="Todos" filterItems={this.showAllProducts} />
        </div>
      );
    } else {
      return (
        <div>
          <ul className="item-list">
            {filteredItems.map(item => {
              const { name, description, quantity, category, price } = item;
              return (
                <li key={name}>
                  <Item
                    name={name}
                    description={description}
                    quantity={quantity}
                    category={category}
                    price={price}
                  />
                </li>
              );
            })}
          </ul>
          <CategoryButton category="Cereales" filterItems={this.filterItems} />
          <CategoryButton category="Fast-food" filterItems={this.filterItems} />
          <CategoryButton category="Bebida" filterItems={this.filterItems} />
          <CategoryButton category="Todos" filterItems={this.showAllProducts} />
        </div>
      );
    }
  }
}

export default ItemList;
