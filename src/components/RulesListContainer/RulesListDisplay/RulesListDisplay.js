import React from 'react';

export default class RulesListDisplay extends React.Component{
  render() {
    const items = this.props.rules.map((rule)=>
    <li>{rule}</li>
    );

    return (<ul> {items} </ul>);
  }
}