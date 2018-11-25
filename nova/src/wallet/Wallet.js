import React, {Component} from 'react';

import './styles.css';
import Balance from './Balance/Balance';
import Split from './Split/Split';
import SendFunds from './SendFunds/SendFunds'

import Web3 from 'web3'

export default class Wallet extends Component{

  state = {
    connected: false,
    balance: 13.90,
    provider: {},
    address: "",
    sent: null
  }

    //Task 1: connected to metamask!
  login(){
    if (typeof window.web3 !== 'undefined') {
      console.log('check');
      const provider = new Web3(window.web3.currentProvider);
      provider.eth.getAccounts().then(addresses => {
        this.setState({ connected: true, provider, address: addresses[0]})
      }).catch(error => {
        this.setState({ error })
        console.log(error);
        });

    }

  }

    //Task 2: got balance from metamask
    getBalance(){

      //for some reason this is inconsistent
        //sometimes address is invalid
      this.state.provider.eth.getBalance(this.state.address)
      .then((result)=>{
        this.setState({
          balance: result
        })
      });
    }

    //Task 3: send transactions
      //the imbetweeners need to be handled outside
    send = ({whom, value, gas}) => {

      // this.state.provider.eth.getAccounts().then(addresses => {
      //   console.log(addresses);
      // })

      this.state.provider.eth.sendTransaction({
        from: this.state.address,
        to: whom,
        value: value,
        gas: gas
      })
        .then(addresses => {
          this.setState({ sent: true})
        }).catch(error => {
          this.setState({ error, sent: false })
          console.log(error);
          });

    }


  render(){

    const display = !this.state.connected ? (
          <div>
            <button onClick = {() => this.login()}>Login with MetaMask</button>
          </div>
      ) : (
        <div>
          <h1>Locked and Loaded, sir</h1>
        </div>
      );
      const btnOrNah = !this.state.connected? (
        <button className = "btn">Login</button>
      ) : (
        <button className = "btn" onClick = { () => this.getBalance()}>Get Balance</button>
      );
    return(
      <div>

        {display}

        <div className = "walletBody">
          <Balance value = {this.state.balance} />

          {btnOrNah}
          <Split side = "horizontal"/>
          <Split side = "horizontal" double = 'double'/>

          <div className = "card">
          </div>

          <div className = "card2">
          </div>

          <div className = "card3">
          </div>

          <div className = "card4">
          </div>

          <SendFunds send = {this.send}/>



        </div>
      </div>
    )
  }

}
