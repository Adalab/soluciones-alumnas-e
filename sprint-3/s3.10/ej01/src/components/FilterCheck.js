import React, { Component } from "react";
import PropTypes from "prop-types";

class FilterCheck extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { filterPeople, clearFilteredPeople, getChecked } = this.props;
    const currentValue = e.currentTarget.value;
    const isChecked = e.currentTarget.checked;
    getChecked(currentValue, isChecked);
    if (isChecked) {
      filterPeople(currentValue);
    } else {
      clearFilteredPeople();
    }
  }

  render() {
    const { checkedStatus } = this.props;
    return (
      <form>
        <fieldset>
          <legend>Gender</legend>
          <label htmlFor="female">
            <input
              type="checkbox"
              name="gender"
              value="female"
              onChange={this.handleChange}
              checked={checkedStatus.female}
            />
            Female
          </label>
          <label htmlFor="male">
            <input
              type="checkbox"
              name="gender"
              value="male"
              onChange={this.handleChange}
              checked={checkedStatus.male}
            />
            Male
          </label>
        </fieldset>
      </form>
    );
  }
}

FilterCheck.propTypes = {
  filterPeople: PropTypes.func.isRequired,
  clearFilteredPeople: PropTypes.func.isRequired,
  getChecked: PropTypes.func.isRequired,
  checkedStatus: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired
};

export default FilterCheck;
