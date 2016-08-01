import React from 'react';

var OptionsList = React.createClass({
	 getInitialState() {
        return {
            
        };
    },
  render() {
      return (
        <div className="options">

          <h4 className="inline" ><input type='radio' name="answer" value="0" /> {this.props.optionslist[0]}</h4><br/>
          <h4 ><input type='radio' name="answer" value="1" />{this.props.optionslist[1]}</h4><br/>
          <h4 ><input type='radio' name="answer" value="2" />{this.props.optionslist[2]}</h4>
        </div>
      
      );

    
  }
}
);
module.exports = OptionsList;