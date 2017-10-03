import * as React from "react";
import TextAndValue from "./ValueAboveText/ValueAboveText";
import RepositoryDesc from "./RepositoryDescription/RepositoryDescription";
import styles from "./github-widget.scss"


export default class GithubWidget extends React.Component {
  render() {
    return (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.photoAndSummary}>
              <img className={styles.avatar} alt="avatar"
                   src="https://maxcdn.icons8.com/Share/icon/color/Gaming//pokecoin1600.png"/>
              <div className={styles.summary}>
                <h2 className="name">Maksym Mazur</h2>
                <h4 className="summary">Doing Java, learning React, having fun.</h4>
                <h6 className="location">Krakow, Poland</h6>
              </div>
            </div>
            <div className={styles.headerBottom}>
              <TextAndValue text="Followers" value="5"/>
              <TextAndValue text="Following" value="10"/>
              <TextAndValue text="Repositories" value="2"/>
            </div>
          </div>
          <div className={styles.body}>
            <h2>Top repositories</h2>
            <div className={styles.repositories}>
              <RepositoryDesc name="algorithms" language="Java" stars={2}/>
              <RepositoryDesc name="first-page" language="JS" stars={5}/>
              <RepositoryDesc name="experimental-high-io-server" language="GO" stars={999}/>
            </div>
          </div>
        </div>)
  }
}

