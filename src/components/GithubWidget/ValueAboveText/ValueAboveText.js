import * as React from "react";
import styles from "./ValueAboveText.scss"

export default class ValueAboveText extends React.Component {
  render() {
    return (
        <div className={styles.main}>
          <div className={styles.number}>{this.props.value}</div>
          <div className={styles.text}>{this.props.text}</div>
        </div>
    )
  }
}