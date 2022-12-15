import React, { Component } from 'react'
import {Routes,Route, Router} from 'react-router-dom';
import News from './components/News';

export default class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<News key="all" PageSize={9} Country={"in"} category={"general"}/>} />
        <Route path="/entertainment" element={<News key="entertainment" PageSize={9} Country={"in"} category={"entertainment"}/>} />
        <Route path="/general" element={<News key="general" PageSize={9} Country={"in"} category={"general"}/>} />
        <Route path="/business" element={<News key="business" PageSize={9} Country={"in"} category={"business"}/>} />
        <Route path="/health" element={<News key="health" PageSize={9} Country={"in"} category={"health"}/>} />
        <Route path="/science" element={<News key="science" PageSize={9} Country={"in"} category={"science"}/>} />
        <Route path="/sports" element={<News key="sports" PageSize={9} Country={"in"} category={"sports"}/>} />
        <Route path="/technology" element={<News key="technology" PageSize={9} Country={"in"} category={"technology"}/>} />
      </Routes>
    )
  }
}
