import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { MovieListComponent, AddMovie, HomeComponent } from './components';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>


      // </div>
      <HashRouter>
        <div>
          <h1>Movie Database</h1>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/movies" component={MovieListComponent} />
            <Route path="/movies/add" component={AddMovie} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
