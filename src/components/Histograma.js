import React, { Component } from 'react';  
import './Histograma.css';

class Histograma extends Component{

  constructor() {
    super();
  }
 
  counter(items, keys) {

    let values = [];

    
    if (items && keys) { 
        keys.forEach(key => {
            let occurrences = items.filter(item => item === key).length;
            if (!values.includes(key)) {
                values.push({
                    key,
                    occurrences: "*".repeat(occurrences)
                })
            } else {
                let index = values.findIndex(x => x.key == key);
                items[index].occurrences = "*".repeat(occurrences);
            }
             
        });
        let html = values.map((d) => 
        <div key={d.key} className="values"> 
               
               <div className="key">
               {d.key}: 
               </div>
               <div className="occurrences">
               {d.occurrences} 
               </div>
        
        </div>);
        return html;
    } else {
        return ''
    }
  }

  render() {
      
 
    return (
      <div className="Histograma">
           { this.counter(this.props.items.values,this.props.keys) }
      </div>
    )
  }


}

export default Histograma;
