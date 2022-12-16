import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // apiKey = process.env.MY_SECRET_NEWS_API_KEY
  apiKey = "c7b880be7eab4091b094141b8dc48de8";
  
  state = {
    progress:10
  }
  setprogress = (chngprogress) => {
    // console.log(this.state.progress);
    this.setState({ progress: chngprogress });
  }
  render() {
    return (
      <div > 
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        height={5}
        progress={this.state.progress}
        />
        <Navbar />
        <AppRouter progress={this.setprogress} apiKey={this.apiKey}/>
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

// npm i react-infinite-scroll-component
// npm install react-router-dom
// npm i react-top-loading-bar