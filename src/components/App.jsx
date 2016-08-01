import React from 'react';
import RemainingQuestions from './remaining';
import Marks from './marks';
import QuestionBox from './questionbox';
import RemainingTime from './remainingtime';

var App = React.createClass({
  componentWillMount(){
    var queno = Math.floor((Math.random() * this.props.qns)); 
    this.setState({questionno:queno});
    this.acivatekeypress();
  },
	getInitialState(){
		return {
			
				questionno:0,
				mark:0,
				remain:19,
        timexpired:false,
        Qn:1


			
		};
	},
  acivatekeypress(){
    $('.container').keypress( (event) => {
                                            console.log("key :",event.which);
                                            if(event.which == 49){
                                              console.log("NumPad 1 was pressed");
                                              $("input[value='0']").prop("checked",true);
                                              event.preventDefault();
                                            }
                                            else if(event.which == 50){
                                   
                                              console.log("NumPad 2 was pressed");
                                              $("input[value='1']").prop("checked",true);
                                              event.preventDefault();
                                            }
                                            else if(event.which == 51){
                                              console.log("NumPad 1 was pressed");
                                              $("input[value='2']").prop("checked",true);
                                              event.preventDefault();
                                            }
                                            else if(event.which == 13){
                                              console.log("Enter was pressed");
                                              this.validate();
                                              event.preventDefault();
                                            }
                                            else{
                                             
                                            }
                                          }
                            );
  },
  validate(){
    if ($("input[name='answer']").is(':checked')) {
        var userval = $("input[name='answer']:checked").attr("value");
        $("input[name='answer']").prop("checked",false);
        this.checkAnswer(userval);
    }
    else {
     alert("select an option!")
    }
  },
  checkAnswer(userval){
    if (parseInt(userval) === this.props.data.questions[this.state.questionno].ans) {
      let mark=this.state.mark+1;
      this.setState({mark:mark});      
    }  
    else{
    }
    let remain = this.state.remain -1;
    this.setState({remain:remain});
    this.nextQuestion();
  },
	nextQuestion(){
		var queno = Math.floor((Math.random() * this.props.qns)); 
    let Qn = this.state.Qn +1;
    this.setState({Qn:Qn});
    this.setState({questionno:queno});
    
	},
  reset(){
    this.setState({mark:0,remain:19,timexpired:false,Qn:1})
  },
  timexpired(){
    this.setState({timexpired:true});
  },
		 
  render() {
    if (this.state.remain < 0) {
      return (
        <div>
          <h1>Try again, you failed the test</h1>
          <a onClick={this.reset} className="btn btn-primary">Try Again</a>
          <a href="" className="btn btn-primary"> Change language</a>
        </div>
      );
    }
    else if(this.state.mark == 12 ){
      return (
        <div>
          <h1>Congratulations passed the test</h1>
          <a onClick={this.reset} className="btn btn-primary">Try Again</a>
          <a href="" className="btn btn-primary"> Change language</a>
        </div>
      );
    }
    else if (this.state.timexpired) {
      return (
        <div>
          <h1>Time Expired to finish the test</h1>
          <a onClick={this.reset} className="btn btn-primary">Try Again</a>
          <a href="" className="btn btn-primary"> Change language</a>
        </div>
      );
    }
    else {   		   
      return (
      	<div>

        <RemainingTime timexpired={this.timexpired} />
        <RemainingQuestions remain = { this.state.remain } />
        <Marks mark={ this.state.mark}/>
        <QuestionBox questionno={this.state.Qn} question= {this.props.data.questions[this.state.questionno]}/>
        <div className="row">
        	<div className="col-sm-6">
        	</div>
        	<div className="col-sm-6">
        		<a  className = "btn btn-success" onClick= {this.validate} >Next</a>
        	</div>
           <div>
           <p>Use NumPad 1,NumPad 2,Numpad 3 to choose option and press enter to submit</p>
           </div>
        </div>
        </div>
      	
      );
    }
  }
}
);


module.exports  = App;
