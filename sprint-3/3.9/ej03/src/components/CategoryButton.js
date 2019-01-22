import React, { Component } from "react";

class CategoryButton extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const currentCategory = e.currentTarget.name;
    this.props.filterItems(currentCategory);
  }

  render() {
    const { category } = this.props;
    return (
      <button type="button" name={category} onClick={this.handleButtonClick}>
        {category}
      </button>
    );
  }
}

export default CategoryButton;
