import * as React from "react";

export default class RepositoryDesc extends React.Component {
  render(){
    return(
        <div className="repository-desc">
          <h6>{this.props.name}</h6>
          <h6>{this.props.language}</h6>
          <h6>{"* "+this.props.stars}</h6>
        </div>
    )
  }
}