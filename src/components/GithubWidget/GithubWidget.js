import * as React from "react";
import TextAndValue from "./ValueAboveText/ValueAboveText";
import RepositoryDesc from "./RepositoryDescription/RepositoryDescription";
import styles from "./github-widget.scss"
import {fetchRepos, fetchUserDetails} from "../../actions/actions";
import {connect} from "react-redux";


class GithubWidget extends React.Component {

    componentWillMount(){
        fetchUserDetails(this.props.dispatch);
        fetchRepos(this.props.dispatch);
    }

  render() {
        const repos = this.props.ghRepos.map((repo) =>
           <RepositoryDesc key={repo.id} name={repo.name} language={repo.language} stars={repo.stargazers_count}/>
        );
    return (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.photoAndSummary}>
              <img className={styles.avatar} alt="avatar"
                   src={this.props.ghUser.avatar_url}/>
              <div>
                <div className={styles.name}>{this.props.ghUser.name}</div>
                <div className={styles.summary}>{this.props.ghUser.bio}</div>
                <div className={styles.location}>{this.props.ghUser.location}</div>
              </div>
            </div>
            <div className={styles.headerBottom}>
              <TextAndValue text="Followers" value={this.props.ghUser.followers}/>
              <TextAndValue text="Following" value={this.props.ghUser.following}/>
              <TextAndValue text="Repositories" value={this.props.ghUser.public_repos}/>
            </div>
          </div>
          <div className={styles.body}>
            <span className={styles.topRepositoriesText}>Top repositories</span>
            <div>
                {repos}
            </div>
          </div>
        </div>)
  }
}

function mapStateToProps(state) {
    return state.githubWidgetReducer;
}

export default connect(mapStateToProps)(GithubWidget);

