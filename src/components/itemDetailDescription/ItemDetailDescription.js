import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./itemDetailDescription.css";

const ItemDetailDescription = () => ({
	render(){
		return (
			<div className = {`item-desc-common  ${this.props.classValue}` }>
				<span>{this.props.heading}</span>
			</div>
		);
	} 
});

export default ItemDetailDescription; 