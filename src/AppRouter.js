import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom';
import News from './components/News';

export default class AppRouter extends Component {
    noOfElementsInPage = 9;
  render() {
    return (
      <Routes>
        <Route path="/" element={<News setProgress={this.props.progress} apiKey={this.props.apiKey} key="all" PageSize={this.noOfElementsInPage} Country={"in"} category={"general"}/>} />
        <Route path="/entertainment" element={<News setProgress={this.props.progress} apiKey={this.props.apiKey}  key="entertainment" PageSize={this.noOfElementsInPage} Country={"in"} category={"entertainment"}/>} />
        <Route path="/general" element={<News setProgress={this.props.progress} apiKey={this.props.apiKey} key="general" PageSize={this.noOfElementsInPage} Country={"in"} category={"general"}/>} />
        <Route path="/business" element={<News setProgress={this.props.progress} apiKey={this.props.apiKey} key="business" PageSize={this.noOfElementsInPage} Country={"in"} category={"business"}/>} />
        <Route path="/health" element={<News setProgress={this.props.progress} apiKey={this.props.apiKey} key="health" PageSize={this.noOfElementsInPage} Country={"in"} category={"health"}/>} />
        <Route path="/science" element={<News setProgress={this.props.progress} apiKey={this.props.apiKey} key="science" PageSize={this.noOfElementsInPage} Country={"in"} category={"science"}/>} />
        <Route path="/sports" element={<News setProgress={this.props.progress} apiKey={this.props.apiKey} key="sports" PageSize={this.noOfElementsInPage} Country={"in"} category={"sports"}/>} />
        <Route path="/technology" element={<News setProgress={this.props.progress} apiKey={this.props.apiKey} key="technology" PageSize={this.noOfElementsInPage} Country={"in"} category={"technology"}/>} />
      </Routes>
    )
  }
}
