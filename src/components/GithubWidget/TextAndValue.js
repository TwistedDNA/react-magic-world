import * as React from "react";

export default class TextAndValue extends React.Component {
  render() {
    return (
        <div className="text-and-value">
          <h2>{this.props.value}</h2> <br/>
          <h5>{this.props.text}</h5>
        </div>
    )
  }
}