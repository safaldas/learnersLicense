import React from 'react';

var RemainingTime = React.createClass({
  componentDidMount(){
    setInterval(this.tick,60000);
  },
  tick(){
    let remain=this.state.remain -1;
    this.setState({remain:remain});
  },
  getInitialState() {
      return {
          remain: 20
      };
  },

  render() {
    if (this.state.remain <0) {
      this.props.timexpired();
    }
    return (
      <div className="row text-right push-left">
        <h5 ><span className="  label label-info">Remaining  Time:{this.state.remain}mins</span></h5>
      </div>
    );
  }
});
module.exports = RemainingTime;