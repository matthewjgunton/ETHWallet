//testing to see if this works rn, want to make sure all values are being successfully
  //passed into the state

import React, {Component} from 'react';

export default class SendFunds extends Component{

  state = {
    whom: "",
    value: "",
    gas: ""
  }

  send(){
    console.log("Did it transfer?");
  }

  handleWhomChange = (e)=>{
    this.setState({
      whom: e.target.value
    })
  }

  handleValueChange = (e)=>{
    this.setState({
      value: e.target.value
    })
  }

  handleGasChange = (e)=>{
    this.setState({
      gas: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state);

    this.props.send(this.state);
  }

  render(){
    return(
      <div className = "right">
        <form onSubmit = {this.handleSubmit}>
          <label>Send to Whom?</label><br/><input value = {this.state.whom} onChange = {this.handleWhomChange} /><br/>
          <label>Value(ETH)</label><br/><input value = {this.state.value} onChange = {this.handleValueChange} type = "number"/><br/>
          <label>Gas:</label><br/>
            <input onChange = {this.handleGasChange} name = "gas" type = 'radio' value = "2000"/>Standard<br/>
            <input onChange = {this.handleGasChange} name = "gas" type = 'radio' value = "4000"/>Fast<br/>
            <input onChange = {this.handleGasChange} name = "gas" type = 'radio' value = "8000"/>Premium<br/>
            <input onChange = {this.handleGasChange} name = "gas" type = 'radio' value = "10000"/>Lightning<br/>
          <button>Send</button>
        </form>
      </div>
    )
  }

}
