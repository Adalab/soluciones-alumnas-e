import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Person extends Component {
  render() {
    const { person } = this.props;
    return (
      <Fragment>
        <img src={person.picture.medium} alt="" />
        <h2>{person.name.first}</h2>
        <p>{person.location.city}</p>
        <p>{person.dob.age}</p>
      </Fragment>
    );
  }
}

Person.propTypes = {
  person: PropTypes.shape({
    picture: PropTypes.shape({
      medium: PropTypes.string.isRequired
    }).isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Person;
