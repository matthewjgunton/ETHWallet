import React, {Component} from 'react';

export default class Balance extends Component{
  render(){
    return(
      <div className = 'screen'>
        {/*this is where the value for the current balance goes:*/}
        13.90 ETH
        <img src = "/img.png" width = {100} height = {100}/>
      </div>
    )
  }
}
