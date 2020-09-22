import React, { Component } from 'react';   
import Eje1 from './components/ej-1/ej-1';
import Eje2 from './components/eje-2/eje-2';

class App extends Component{
  constructor() {
    super();
  }
 
  render() {
    return (
      <div className="App">
        <Eje1></Eje1>
        <Eje2></Eje2>
      </div>
    )
  }
}

export default App;
