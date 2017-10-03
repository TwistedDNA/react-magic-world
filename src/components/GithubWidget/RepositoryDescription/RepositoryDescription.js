import * as React from "react";
import starIcon from "../star.svg"
import styles from "./RepositoryDescription.scss"

export default class RepositoryDesc extends React.Component {
  render() {
    return (
        <div className={styles.container}>
          <span>{this.props.name}</span>
          <span>{this.props.language}</span>
          <div className={styles.starAndNumber}>
            <img alt="star" src={starIcon} className={styles.starIcon}/>
            <span>{this.props.stars}</span>
          </div>
        </div>
    )
  }
}
