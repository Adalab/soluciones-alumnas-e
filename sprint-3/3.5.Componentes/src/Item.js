import React from 'react';
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
   

    return (
          <div>
            {this.props.name}
            {this.props.description}
            {this.props.quantity}
            {this.props.category}
            {this.props.price}
          </div>
    )}
}
Item.defaultProps = {
  description: 'No hay descripción'
};
Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Item;