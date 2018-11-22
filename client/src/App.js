import React, { Component } from 'react';

import Wallet from './wallet/Wallet.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Matthew J Gunton's Ethereum Wallet</h1>
        <Wallet />
      </div>
    );
  }
}

export default App;
