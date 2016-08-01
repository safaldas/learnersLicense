import React from 'react';

var RemainingQuestions = React.createClass({  

  getInitialState(){
    return {};
  },
  render(){
    return (<div className="row text-right push-left"> 
      <h5><span className="text-right  label label-info">Remaining Questions: {this.props.remain} </span></h5>
      </div>);
  }
});

module.exports  = RemainingQuestions;