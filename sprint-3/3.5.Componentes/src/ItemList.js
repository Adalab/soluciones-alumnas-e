import React from 'react';
import Item from './Item';
import './App.css';

class ItemList extends React.Component {
  render() {
    const items = this.props.items;

    return (
      <ul className="list">
        {items.map((list) =>{
          return(
            <li >
            <Item
              name = {list.name}
              description = {list.description}
             />
            </li>
          
          )
        })}
      </ul>
    )}
}

export default ItemList;