import React, { Component } from "react";
import Bookings from "./components/Bookings";
import Meals from "./components/Meals";
import Error from "./components/Error";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateError: {},
      mealList: {},
    };
    this.renderMealPlan = this.renderMealPlan.bind(this);
  }
  renderMealPlan(clientProps) {
    if (clientProps.error) {
      this.setState({
        dateError: { error: "error", client: clientProps.hacker },
      });
    } else {
      this.setState({
        mealList: clientProps,
      });
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <center>
          <h2>Hacker Hostel</h2>
        </center>
        <div className="container">
          <Bookings mealPlan={this.renderMealPlan}></Bookings>
          {this.state.dateError.client && (
            <Error {...this.state.dateError}></Error>
          )}
          {this.state.mealList.hacker && (
            <Meals {...this.state.mealList}></Meals>
          )}
        </div>
      </div>
    );
  }
}

export default App;
