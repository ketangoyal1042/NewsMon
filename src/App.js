import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

export default class App extends Component {
  render() {
    return (
      <div > 
        <BrowserRouter>
        <Navbar />
        <AppRouter/>
        {/* <News PageSize={9} Country={"in"} category={"entertainment"}/> */}
        </BrowserRouter>
      </div>
    );
  }
}

// business
// entertainment
// general
// health
// science
// sports
// technology