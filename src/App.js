import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
// import Teacher from './Teacher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Intro />
        {/* <Teacher /> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
