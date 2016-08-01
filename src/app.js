require("expose?$!expose?jQuery!jquery");
require("bootstrap");
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

var englishqns = require("json!./components/questions.json");
var malayalamqns = require("json!./components/questionsmalayalam.json");
/*not available do it yourself*/
 
var Language = React.createClass({
	getInitialState() {
		return {
			
			selected: false,
			data: null,
			noofquestions:112

		};
	},
	languageChosen(lan) {

		if (lan === 'En') {


			this.setState({ noofquestions:212, data: englishqns });

		}
		else if (lan==='Mal'){
			this.setState({ noofquestions:112, data: malayalamqns});
		}
		this.confirmselection();
	},
	confirmselection(){
		this.setState({selected: true  });

	},
	render: function () {

		if (this.state.selected) {
			return (
				<App data={this.state.data} qns = {this.state.noofquestions} />
				);
			}
			else{

				return (
				<div className="text-center">
				<button className="btn btn-primary " onClick={() => this.languageChosen('En')}>English</button>
				<br/>
				<br/>
				<button className="btn btn-primary " onClick={() => this.languageChosen('Mal')} >Malayalam </button>

				</div>
				);
			}
		}
	});


	ReactDOM.render(<Language  />, document.getElementById('app'));