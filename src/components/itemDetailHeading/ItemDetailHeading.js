import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./itemDetailHeading.css";

const ItemDetailHeading = () => ({
	render(){
		return (
			<div className = {`item-heading-common ${this.props.classValue}` }>
				<span>{this.props.heading}</span>
			</div>
		);
	} 
});

export default ItemDetailHeading;