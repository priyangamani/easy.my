import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./image.css";

const Image = () => ({
	render(){
		return <img className= {this.props.classValue}
			src={this.props.source} 
			eight={this.props.height} 
			width={this.props.width}></img>;
	} 
});

export default Image;