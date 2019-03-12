import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./horizontalLine.css";

const HorizontalLine = () => ({
	render(){
		return (
			<div className = {`horizontal-common ${this.props.classValue}` }>
			</div>
		);
	} 
});

export default HorizontalLine;