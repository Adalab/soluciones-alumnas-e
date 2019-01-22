import React, { Component } from "react";
import Person from "./Person";
import PropTypes from "prop-types";

class PeopleList extends Component {
  render() {
    const { people, filteredPeople } = this.props;
    return (
      <ul>
        {filteredPeople.length > 0
          ? filteredPeople.map(person => {
              return (
                <li key={person.uniqueId}>
                  <Person person={person} />
                </li>
              );
            })
          : people.map(person => {
              return (
                <li key={person.uniqueId}>
                  <Person person={person} />
                </li>
              );
            })}
      </ul>
    );
  }
}

PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  filteredPeople: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default PeopleList;
