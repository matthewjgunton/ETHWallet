import React, {Component} from 'react';

import './styles.css';
import Balance from './Balance/Balance.js';
import Split from './Split/Split';

import Web3 from 'web3'

export default class Wallet extends Component{

  state = {
    balance: 13.90
  }

  constructor(props) {
    super(props);

    //better way than to manually bind all of them?
    this.getBalance = this.getBalance.bind(this);
    //setting up web3 here, I think:

    this.web3 = new Web3(Web3.givenProvider);
    if (typeof web3 != 'undefined') {
      this.web3Provider = Web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

  }

    getBalance(){
      console.log('reached?');
      this.web3.eth.getBalance("0x8c1124bc15f0da872beecb8196366e9f8cbd8be7")
      .then((result)=>{
        this.setState({
          balance: result
        })
      });
    }


  render(){
    return(
      <div className = "walletBody">
        <Balance value = {this.state.balance} />
        <button onClick = {this.getBalance}>Create Account</button>
        <Split side = "horizontal"/>
        <Split side = "horizontal" double = 'double'/>

      </div>
    )
  }

}
