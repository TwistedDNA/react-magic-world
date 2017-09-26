import React from 'react';
import RulesListDisplay from "./RulesListDisplay/RulesListDisplay";
import RuleAdder from "./RuleAdder/RuleAdder";

const initialRules = [
  "1st RULE: You do not talk about FIGHT CLUB.",
  "2nd RULE: You DO NOT talk about FIGHT CLUB.",
  "3rd RULE: If someone says \"stop\" or goes limp, taps out the fight is over.",
  "4th RULE: Only two guys to a fight.",
  "5th RULE: One fight at a time.",
  "6th RULE: No shirts, no shoes.",
  "7th RULE: Fights will go on as long as they have to.",
  "8th RULE: If this is your first night at FIGHT CLUB, you HAVE to fight."
];

export default class RulesListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.addRule = this.addRule.bind(this);
  }

  componentWillMount() {
    this.setState({rules: initialRules});
  }

  addRule(rule) {
    let rules = this.state.rules;
    rules.push(rule);
    console.log('New rule is: '+rule);
    this.setState({rules: rules});
  }

  render() {
    return (
        <div>
          <RulesListDisplay rules={this.state.rules}/>
          <RuleAdder addRule={this.addRule}/>
        </div>
    )
  }
}
