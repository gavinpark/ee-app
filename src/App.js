import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Components/Landing.js';
import './App.css';
import MainInterface from './Components/MainInterface.js';

class App extends Component {
  render() {
    return (
      <div className="border">
        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} exact />
          </div>
          <Route path="/main" component={MainInterface} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
