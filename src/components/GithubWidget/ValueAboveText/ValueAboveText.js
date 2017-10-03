import * as React from "react";
import styles from "./ValueAboveText.scss"

export default class ValueAboveText extends React.Component {
  render() {
    return (
        <div className={styles.main}>
          <h2>{this.props.value}</h2>
          <h5>{this.props.text}</h5>
        </div>
    )
  }
}