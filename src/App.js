import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

class App extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div>
        <Header />
        <Home />
        <Footer />

      </div>
      
    );
  }

}

export default App;
