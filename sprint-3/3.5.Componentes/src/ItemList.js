import React from 'react';
import Item from './Item';
import './App.css';

class ItemList extends React.Component {
  render() {
    const items = this.props.items;
 //const {items} = this.props (otra opcion)

    return (
      <ul className="item-list">
        {items.map((list) =>{
          return(
            <li>
            <Item
              name = {list.name}
              description = {list.description}
              quantity = {list.quantity}
              category = {list.category}
              price = {list.price}
             />
            </li>
          )
        })}
      </ul>
    )}
}

export default ItemList;