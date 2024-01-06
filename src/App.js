import React, { Component } from "react";
import './App.css';
import WeekContainer from "./components/WeekContainer/WeekContainer";


const CITIES = ["Moscow", "Krasnodar", "St. Petersburg", "London", "New York"];
class App extends Component {
    state = {
        activeCity: 0,
    };

  render() {
      const activeCity = this.state.activeCity;
      return (
          <div className="App">
              {
                  CITIES.map((city, index) => (
                      <button key={index} onClick={ () => {this.setState({activeCity: index});
                      }}>
                          {city}
                      </button>
                  ))
              }

              <WeekContainer key={activeCity} name={CITIES[activeCity]}/>
          </div>
      );
  }
}

export default App;
