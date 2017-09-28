import React from 'react';
import RulesListDisplay from "./RulesListDisplay/RulesListDisplay";
import RuleAdder from "./RuleAdder/RuleAdder";


class RulesListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.addRule = this.addRule.bind(this);
  }

  componentWillMount() {
    this.setState({rules: this.props.rules});
  }

  addRule(rule) {
    let rules = this.state.rules;
    rules.push(rule);
    console.log('New rule is: ' + rule);
    this.setState({rules: rules});
  }

  render() {
    return (
        <div>
          <RulesListDisplay/>
          <RuleAdder/>
        </div>
    )
  }
}


export default RulesListContainer;