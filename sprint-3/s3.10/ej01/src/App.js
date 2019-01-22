import React, { Component, Fragment } from "react";
import { fetchPeople } from "./services/PeopleService";
import uniqueId from "lodash.uniqueid";
import Loader from "./components/Loader";
import FilterCheck from "./components/FilterCheck";
import PeopleList from "./components/PeopleList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      filteredPeople: [],
      loading: true,
      checkedStatus: {
        female: false,
        male: false
      }
    };
    this.filterPeople = this.filterPeople.bind(this);
    this.clearFilteredPeople = this.clearFilteredPeople.bind(this);
    this.getChecked = this.getChecked.bind(this);
  }

  componentDidMount() {
    this.fetchNewPeople();
  }

  fetchNewPeople() {
    fetchPeople().then(data => {
      const peopleData = data.results;
      const peopleWithId = peopleData.map(person => {
        return {
          ...person,
          uniqueId: uniqueId()
        };
      });
      this.setState({ people: peopleWithId, loading: false });
    });
  }

  filterPeople(value) {
    const { people } = this.state;
    const filteredPeople = people.filter(person => person.gender === value);
    this.setState({ filteredPeople: filteredPeople });
  }

  clearFilteredPeople() {
    this.setState({ filteredPeople: [] });
  }

  getChecked(value, isChecked) {
    this.setState(prevState => {
      return {
        checkedStatus: {
          ...prevState.checkedStatus,
          [value]: isChecked
        }
      };
    });
  }

  render() {
    const { people, filteredPeople, loading, checkedStatus } = this.state;
    return (
      <div className="App">
        {loading ? (
          <Loader />
        ) : (
            <Fragment>
              <FilterCheck
                filterPeople={this.filterPeople}
                clearFilteredPeople={this.clearFilteredPeople}
                getChecked={this.getChecked}
                checkedStatus={checkedStatus}
              />
              <PeopleList people={people} filteredPeople={filteredPeople} />
            </Fragment>
          )}
      </div>
    );
  }
}

export default App;
