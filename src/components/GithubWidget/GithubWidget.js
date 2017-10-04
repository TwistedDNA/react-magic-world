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
              <div>
                <div className={styles.name}>Maksym Mazur</div>
                <div className={styles.summary}>Currently working at Geekskool as student programmer I am honing my skills as software developer. Coding in Javascript.</div>
                <div className={styles.location}>Krakow, Poland</div>
              </div>
            </div>
            <div className={styles.headerBottom}>
              <TextAndValue text="Followers" value="5"/>
              <TextAndValue text="Following" value="10"/>
              <TextAndValue text="Repositories" value="2"/>
            </div>
          </div>
          <div className={styles.body}>
            <span className={styles.topRepositoriesText}>Top repositories</span>
            <div>
              <RepositoryDesc name="algorithms" language="Java" stars={2}/>
              <RepositoryDesc name="first-page" language="Javascript" stars={5}/>
              <RepositoryDesc name="experimental-high-io-server-------" language="GO" stars={999}/>
            </div>
          </div>
        </div>)
  }
}

