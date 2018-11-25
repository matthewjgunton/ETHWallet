import React, {Component} from 'react';

export default class Balance extends Component{
  render(){
    return(
      <div className = 'screen'>
        {/*how do i set this up to change font-size dynamically with the value passed in?:*/}
        {this.props.value} ETH
        <img src = "/img.png" alt = "ETH" width = {100} height = {100}/>
      </div>
    )
  }
}
