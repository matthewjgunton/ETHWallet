import React, {Component} from 'react';

export default class Balance extends Component{
  render(){
    return(
      <div className = 'screen'>
        {/*this is where the value for the current balance goes:*/}
        {this.props.value}
        <img src = "/img.png" alt = "ETH" width = {100} height = {100}/>
      </div>
    )
  }
}
