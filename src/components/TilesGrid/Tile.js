import * as React from "react";
import {TILE_CLICKED} from "../../constants/actionTypes";
import {connect} from "react-redux";

class Tile extends React.Component{
    render(){
        return(
            <div className="tile" onClick={this.props.handleClick}>
                <div className="tile-header">
                    {this.props.header}
                </div>
                <div className="tile-body">
                    <a href={this.props.body}> {this.props.body} </a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    handleClick: () => dispatch({type: TILE_CLICKED})
});

export default connect(null, mapDispatchToProps)(Tile);
