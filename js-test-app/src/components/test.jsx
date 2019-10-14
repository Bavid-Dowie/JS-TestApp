import React, { Component } from 'react';
import Calculator from './Calculator';

class Test extends Component {
  render() {
    return (
      <div className='test-component'>
        <header>
          <h1>Header</h1>
          <Calculator />
        </header>
      </div>
    )
  }
}

export default Test;