import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  // apiKey = process.env.MY_SECRET_NEWS_API_KEY
  const apiKey = "c7b880be7eab4091b094141b8dc48de8";
  const [progress, setParogress] = useState(10)
  
  // const setprogress = (chngprogress) => {
    // this.setState({ progress: chngprogress });
    // setProgress(chngprogress);
  // }
    return (
      <div > 
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        height={5}
        progress={progress}
        />
        <Navbar />
        <AppRouter progress={setParogress} apiKey={apiKey}/>
        </BrowserRouter>
      </div>
    );
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