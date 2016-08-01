import React from 'react';

var Marks = React.createClass({
	 getInitialState() {
        return {
            
        };
    },
  render() {
    return (<div  className="row text-right push-left">
      <h5 ><span className="label label-info ">Marks:{this.props.mark}/12</span></h5>      	
    	</div>
    	);
  }
}
);
module.exports = Marks;