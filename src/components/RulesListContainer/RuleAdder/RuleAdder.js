import React from 'react';
import {connect} from "react-redux";
import {RULE_ADDED, RULE_TEXT_UPDATED} from "../../../constants/actionTypes";

class RuleAdder extends React.Component {
constructor(props){
  super(props);
  this.updateValue = ev => {
    this.props.onChangeUpdateState(ev.target.value);
  };
  this.addRule = () => {
    this.props.onClickAddRule();
  }
}

  render() {
    return (
        <div>
          <input value={this.props.ruleText} onChange={this.updateValue}/>
          <button type="submit" onClick={this.addRule}>Add rule</button>
        </div>
    )
  }
}
function mapStateToProps(state) {
    return state.rulesReducer;
}

const mapDispatchToProps = dispatch => ({
  onClickAddRule: () => dispatch({type: RULE_ADDED}),
  onChangeUpdateState: (value) => dispatch({type: RULE_TEXT_UPDATED, value})
});

export default connect(mapStateToProps ,mapDispatchToProps)(RuleAdder);