import React, { Component } from 'react';  
import './MatrixX.css';

class MatrixX extends Component{

  constructor() {
    super();
  }
 
  render() {
    const N = this.props.value.axis ? Number(this.props.value.axis): 0;
    let HTML = '';
    if (N === 0) {
        HTML = <p className="error">Error</p>
    } else {
        const middle = Math.round((N - 1) / 2);
        const matrix = [...Array(N)].map(x=>Array(N).fill(0));
        matrix.forEach((lines, index) => {
            lines.forEach((line,indexLine) => lines[indexLine] = '_');
            if (index === 0 || index  === N-1 ) {
                lines[0] = 'X';
                lines[N-1]='X'
            } else  {
                if( index < middle) {
                    lines[0+index] = 'X';
                    lines[N-1-index]='X'
                }
                if( index > middle) { 
                    lines[(N-1)-index] = 'X';
                    lines[index]='X'
                }
                if (index === middle) {
                    if (N % 2 === 0) {
                        lines[middle] = 'X';
                        lines[middle-1]='X'
                    } else  {
                        lines[middle] = 'X';
                    }
                }  
            }
        }) 
        HTML = matrix.map((lines) => 
            <div>{lines}</div>
        );
    }

    return (HTML);
  }

}

export default MatrixX;
