import React from 'react';
import {addRule} from "../../../actions/index";
import bindActionCreators from "redux/es/bindActionCreators";
import {connect} from "react-redux";

class RuleAdder extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    console.log('handling click');
    this.props.addRule(this.state.value);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
        <div>
          <input onChange={this.handleChange}/>
          <button type="submit" onClick={this.props.addRule}> Add rule</button>
        </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({addRule: addRule}, dispatch);
}

export default connect(matchDispatchToProps)(RuleAdder);
