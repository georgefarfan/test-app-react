import React, { Component } from 'react'; 
import Histograma from './components/Histograma';
import './App.css';

 
const KEYS = ["1", "2", "3", "4", "5"]; 

class App extends Component{
  constructor() {
    super();
    
    this.state = {
    };
    this.onInputchange = this.onInputchange.bind(this); 
  }

 
  onInputchange(event) { 
    this.setState({
      values: event.target.value.split('')
    });
  }

  onSubmitForm() {
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <input
            value={this.state.fname}
            onChange={this.onInputchange}
        ></input>
        <Histograma items={this.state} keys={KEYS}></Histograma>
      </div>
    )
  }


}

export default App;
