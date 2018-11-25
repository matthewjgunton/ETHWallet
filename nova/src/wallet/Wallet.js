import React, {Component} from 'react';

import './styles.css';
import Balance from './Balance/Balance';
import Split from './Split/Split';
import SendFunds from './SendFunds/SendFunds'

import Web3 from 'web3'

export default class Wallet extends Component{

  state = {
    balance: 13.90
  }

  constructor(props) {
    super(props);


    //Task 1: connected to metamask!
    this.web3 = new Web3(Web3.givenProvider);
    if (typeof web3 != 'undefined') {
      console.log('found metamask');
      this.web3Provider = Web3.currentProvider
    } else {
      console.log("Metamask is not found");
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

  }

    //Task 2: got balance from metamask
    getBalance(){
      //for some reason this is inconsistent
        //sometimes address is invalid
      var address = this.web3.eth.accounts._provider.selectedAddress;
      this.web3.eth.getBalance(address)
      .then((result)=>{
        this.setState({
          balance: result
        })
      });
    }

    //Task 3: send transactions
    send = () => {
      const keystore = "Contents of keystore file";
      const decryptedAccount = this.web3.eth.accounts.decrypt(keystore, 'PASSWORD');

      const rawTransaction = {
        "from": "Keystore account id",
        "to": "Account you want to transfer to",
        "value": this.web3.utils.toHex(this.web3.utils.toWei("0.001", "ether")),
        "gas": 2000,
        "chainId": 3
      };

      decryptedAccount.signTransaction(rawTransaction)
      .then(signedTx => this.web3.eth.sendSignedTransaction(signedTx.rawTransaction))
      .then(receipt => console.log("Transaction receipt: ", receipt))
      .catch(err => console.error(err));

    }


  render(){
    return(
      <div className = "walletBody">
        <Balance value = {this.state.balance} />
        <button className = "btn" onClick = { () => this.getBalance()}>Get Balance</button>
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

        {/*<SendFunds web3 = {this.web3} />*/}

        <div className = "right">
          <label>Send to Whom?</label><br/><input /><br/>
          <label>Value(ETH)</label><br/><input type = "number"/><br/>
          <label>Gas:</label><br/>
            <input name = "gas" type = 'radio' value = "2000" selected/>Standard<br/>
            <input name = "gas" type = 'radio' value = "4000" selected/>Fast<br/>
            <input name = "gas" type = 'radio' value = "8000" selected/>Premium<br/>
            <input name = "gas" type = 'radio' value = "10000" selected/>Lightning<br/>
        </div>

      </div>
    )
  }

}
