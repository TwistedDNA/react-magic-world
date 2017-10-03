import * as React from "react";
import styles from "./github-widget.scss"

export default class TextAndValue extends React.Component {
  render() {
    return (
        <div className={styles.textAndValue}>
          <h2>{this.props.value}</h2>
          <h5>{this.props.text}</h5>
        </div>
    )
  }
}