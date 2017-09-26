import React from 'react';

export default class RuleAdder extends React.Component {
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
    this.setState({value:e.target.value});
  }

  render() {
    return (
        <div>
          <input onChange={this.handleChange}/>
          <button type="submit" onClick={this.handleClick}> Add rule</button>
        </div>
    )
  }
}