import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./iconDescription.css";

const IconDescription = () => ({
	render(){
		return (
			<div className = {`icon-image-common ${this.props.classValue}` }>
				<span>{this.props.iconText}</span>
			</div>
		);
	} 
});

export default IconDescription;