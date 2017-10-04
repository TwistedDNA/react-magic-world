import * as React from "react";
import {TILE_CLICKED} from "../../constants/actionTypes";
import {connect} from "react-redux";
import Tile from "./Tile";

class TileGrid extends React.Component {
    render() {
        const items = this.props.tiles.map((tile) =>
            <Tile key={tile.header} header={tile.header} body={tile.body}/>
        );
        return (
            <div className="tile-grid">
                {items}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state.tilesReducer;
}

const mapDispatchToProps = dispatch => ({
    handleClick: () => dispatch({type: TILE_CLICKED})
});


export default connect(mapStateToProps, mapDispatchToProps)(TileGrid);
