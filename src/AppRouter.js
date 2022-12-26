import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom';
import News from './components/News';

export default function AppRouter(props) {
    const noOfElementsInPage = 9;
    return (
      <Routes>
        <Route path="/" element={<News setProgress={props.progress} apiKey={props.apiKey} key="all" PageSize={noOfElementsInPage} Country={"in"} category={"general"}/>} />
        <Route path="/entertainment" element={<News setProgress={props.progress} apiKey={props.apiKey}  key="entertainment" PageSize={noOfElementsInPage} Country={"in"} category={"entertainment"}/>} />
        <Route path="/general" element={<News setProgress={props.progress} apiKey={props.apiKey} key="general" PageSize={noOfElementsInPage} Country={"in"} category={"general"}/>} />
        <Route path="/business" element={<News setProgress={props.progress} apiKey={props.apiKey} key="business" PageSize={noOfElementsInPage} Country={"in"} category={"business"}/>} />
        <Route path="/health" element={<News setProgress={props.progress} apiKey={props.apiKey} key="health" PageSize={noOfElementsInPage} Country={"in"} category={"health"}/>} />
        <Route path="/science" element={<News setProgress={props.progress} apiKey={props.apiKey} key="science" PageSize={noOfElementsInPage} Country={"in"} category={"science"}/>} />
        <Route path="/sports" element={<News setProgress={props.progress} apiKey={props.apiKey} key="sports" PageSize={noOfElementsInPage} Country={"in"} category={"sports"}/>} />
        <Route path="/technology" element={<News setProgress={props.progress} apiKey={props.apiKey} key="technology" PageSize={noOfElementsInPage} Country={"in"} category={"technology"}/>} />
      </Routes>
    )
}
