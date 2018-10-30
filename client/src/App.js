import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greeting = props => {
  let { message1, message2 } = props;
  return (
    <div>
      <h1>{message1}</h1>
      <br />
      <h1>{message2}</h1>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    //state: variable store
    this.state = {
      greeting: 'Greetings from the state',
      onepiece: 'I love Luffy',
      hungry: 'I am hungry',
      title: 'Welcome to state',
      message: '',
      movies: [
        { title: 'Avengers' },
        { title: 'Star Trek' },
        { title: 'Wolverine' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {/* //component */}
        <Greeting message1="This is message 1" message2="This is message 2" />
        {/* state item */}
        <label>
          <h3>{this.state.greeting}</h3>
        </label>
        <h2>{this.state.onepiece}</h2>
        <h3>{this.state.hungry}</h3>

        <p />
        {/* movie as temperory variable */}
        <ul>
          {this.state.movies.map(movie => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
