import React from 'react';

var Signpost= React.createClass({
  getInitialState() {
    return {
      
    };
  },
  render() {
    let sign=this.props.sign;
    if (sign !== null) { 
      var src="./images/"+this.props.sign +"";
      return (
        <img className="images" src={src} alt="" width="100px" height="100px"/>   
        
        );
    }
    
    else{
           return (
        <p></p>
        ); 
    }
  }
});
module.exports = Signpost;