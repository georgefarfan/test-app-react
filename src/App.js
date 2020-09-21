import React, { Component } from 'react'; 
import Histograma from './components/ej-1/Histograma';
import MatrixX from './components/eje-2/MatrixX';

import './App.css';

const KEYS = ["1", "2", "3", "4", "5"]; 

class App extends Component{
  constructor() {
    super();
    this.state = {};
    this.onInputchange = this.onInputchange.bind(this);   
  }

 
  onInputchange(event) { 
    this.setState({
      values: event.target.value.split('')
    });
  }

  render() {
    return (
      <div className="App">
        <h4>Ejercicio 1</h4>
        <input
            onChange={this.onInputchange}
        ></input>
        <Histograma items={this.state} keys={KEYS}></Histograma>
        <h4>Ejercicio 2</h4>
  
        <MatrixX value={this.state}></MatrixX>
      </div>
    )
  }
}

export default App;
