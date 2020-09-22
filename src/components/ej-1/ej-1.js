import React, { Component } from 'react';  
import Histograma from './Histograma'


const KEYS = ["1", "2", "3", "4", "5"]; 

class Eje1 extends Component{

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
        <div>
            <h4>Ejercicio 1</h4>
            <input
                onChange={this.onInputchange}
            ></input>
            <Histograma items={this.state} keys={KEYS}></Histograma>
        </div>
    );
  }

}

export default Eje1;
