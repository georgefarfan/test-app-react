import React, { Component } from 'react';  
import MatrixX from './MatrixX'
 
class Eje2 extends Component{

  constructor() {
    super();
    this.state = {};
    this.onInputchange = this.onInputchange.bind(this);   
  }

  onInputchange(event) { 
    this.setState({
      axis: event.target.value
    });
  }
 
  render() {
 
    return (
        <div>
            <h4>Ejercicio 2</h4>
            <input
                onChange={this.onInputchange}
            ></input>
                <MatrixX value={this.state}></MatrixX>
        </div>
    );
  }

}

export default Eje2;
