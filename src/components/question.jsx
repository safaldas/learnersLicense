import React from 'react';

var Question = React.createClass({
	 getInitialState() {
        return {
            questionno:1
        };
    },
  render() {

    return (
      <h3 className="question text-center" >{this.props.questionno}.{this.props.question}</h3>      	
    	
    	);
  }
}
);
module.exports = Question;