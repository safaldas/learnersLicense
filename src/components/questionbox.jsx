import React from 'react';
import Question from './question';
import Signpost from './images';
import OptionsList from './options';

var QuestionBox = React.createClass({
	 getInitialState() {
        return {
            
        };
    },
  render() {
    return (<div className="questionbox">
      <Question questionno={this.props.questionno} question={this.props.question.Question} />
      <div className="row">
        <div className="col-sm-4">
          <Signpost sign={this.props.question.img} />
        </div>
        <div className="col-sm-8">
          <OptionsList optionslist={this.props.question.Options}/>
        </div>
        
      </div>
    	</div>
    	);
  }
}
);
module.exports = QuestionBox;