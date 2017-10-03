import * as React from "react";
import starIcon from "./star.svg"
import styles from "./github-widget.scss"

export default class RepositoryDesc extends React.Component {
  render() {
    return (
        <div className={styles.repositoryDesc}>
          <h6>{this.props.name}</h6>
          <h6>{this.props.language}</h6>
          <div className={styles.starAndNumber}>
            <img className={styles.starIcon} src={starIcon}/>
            <h6>{this.props.stars}</h6>
          </div>
        </div>
    )
  }
}
