import React from 'react';
import {connect} from "react-redux";
import {RULE_ADDED, RULE_TEXT_UPDATED} from "../../../constants/actionTypes";

class RuleAdder extends React.Component {
constructor(props){
  super(props);
  this.updateValue = ev => {
    console.log(ev.target.value);
    this.props.onChangeUpdateState(ev.target.value);
  };
  this.addRule = () => {
    console.log('addingRule');
    this.props.onClickAddRule();
  }
}

  render() {
    return (
        <div>
          <input onChange={this.updateValue}/>
          <button type="submit" onClick={this.addRule}>Add rule</button>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onClickAddRule: () => dispatch({type: RULE_ADDED}),
  onChangeUpdateState: (v) => dispatch({type: RULE_TEXT_UPDATED, v})
});

export default connect(null ,mapDispatchToProps)(RuleAdder);