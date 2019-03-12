import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData, getItemDetail } from "../actions/items";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import img from "../components/image/Image5.png";
import MediaQuery from "react-responsive";

class ListingPage extends Component {
    componentDidMount() {
        this.props.fetchData("http://5b35ede16005b00014c5dc86.mockapi.io/list");
    }
    handleChange(event) {
        this.props.getItemDetail(event);
        let path = `ViewPage`;
        this.props.history.push(path);
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <div>Listing</div>
                <div className={this.props.classes.root}>
                    <MediaQuery query="(min-device-width: 1224px)">
                        <GridList
                            cellHeight={140}
                            className={this.props.classes.gridList}
                            cols={6}
                        >
                            {this.props.items.data.map(tile => (
                                <GridListTile
                                    key={tile}
                                    cols={1}
                                    className={this.props.classes.titleWrap}
                                    onClick={() => {
                                        this.handleChange(tile);
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt="Image not found"
                                        className={this.props.classes.image}
                                    />
                                    <GridListTileBar
                                        title={tile.attributes.title}
                                        subtitle={
                                            <span
                                                className={
                                                    this.props.classes.title
                                                }
                                            >
                                                {tile.attributes.price}
                                            </span>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </MediaQuery>

                    <MediaQuery query="(max-width: 1224px)">
                        <GridList
                            cellHeight={140}
                            className={this.props.classes.gridList}
                            cols={2}
                        >
                            {this.props.items.data.map(tile => (
                                <GridListTile
                                    key={tile}
                                    cols={1}
                                    className={this.props.classes.titleWrap}
                                    onClick={() => {
                                        this.handleChange(tile);
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt="Image not found"
                                        className={this.props.classes.image}
                                    />
                                    <GridListTileBar
                                        title={tile.attributes.title}
                                        subtitle={
                                            <span
                                                className={
                                                    this.props.classes.title
                                                }
                                            >
                                                {tile.attributes.price}
                                            </span>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

ListingPage.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    getItemList: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    console.log(state);
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        data: state.itemDetail
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url)),
        getItemDetail: data => dispatch(getItemDetail(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ListingPage));

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: "#ffffff"
    },
    gridList: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    },
    title: {
        color: "#ff0000"
    },
    titleWrap: {
        borderRadius: 100,
        borderWidth: 30,
        borderColor: "#000000",
        backgroundColor: "#ffffff",
        height: 450,
        width: 200
    },
    image: {
        width: 200,
        height: 200
    }
});
