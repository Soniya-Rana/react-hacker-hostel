import React, { Component } from "react";
import Bookings from "./components/Bookings";
import Meals from "./components/Meals";
import Error from "./components/Error";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateError: [],
      mealList: [],
    };
    this.handleGetMealsSchedule = this.handleGetMealsSchedule.bind(this);
  }
  handleGetMealsSchedule(newHackers, notAddedHackersNames) {
    if (notAddedHackersNames) {
      this.setState({
        dateError: notAddedHackersNames,
      });
    } else {
      this.setState(
        {
          mealList: newHackers,
        },
        () => console.log(this.state.mealList)
      );
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <center>
          <h2>Hacker Hostel</h2>
        </center>
        <div className="container">
          <Bookings
            handleGetMealsSchedule={this.handleGetMealsSchedule}
          ></Bookings>
          {this.state.dateError.client && (
            <Error dateError={this.state.dateError}></Error>
          )}
          {this.state.mealList.hacker && (
            <Meals hackers={this.state.mealList}></Meals>
          )}
        </div>
      </div>
    );
  }
}

export default App;
