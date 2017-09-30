import React from 'react';
import {connect} from "react-redux";

class RulesListDisplay extends React.Component {
  render() {
    const items = this.props.rules.map((rule) =>
        <li key={rule}>{rule}</li>
    );
    return (<ul> {items} </ul>);
  }
}

function mapStateToProps(state) {
  return state.rulesReducer;
}

export default connect(mapStateToProps)(RulesListDisplay);
