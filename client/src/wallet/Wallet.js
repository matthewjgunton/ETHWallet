import React, {Component} from 'react';
import web3 from 'web3';

import './styles.css';
import Balance from './Balance/Balance.js';
import Split from './Split/Split';

export default class Wallet extends Component{



  render(){
    return(
      <div className = "walletBody">
        <Balance />
        <Split side = "horizontal"/>
        <Split side = "horizontal" double = 'double'/>

      </div>
    )
  }
}
