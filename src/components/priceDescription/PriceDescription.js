import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./priceDescription.css";

const PriceDescription = () => ({
	render(){
		return (
			<div className = {`price-desc-common ${this.props.classValue}` }>
				<span>{this.props.heading}</span>
			</div>
		);
	} 
});

export default PriceDescription;