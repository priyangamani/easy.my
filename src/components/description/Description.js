import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./description.css";

const Description = () => ({
	render(){
		let textValue  = this.props.classValue === "description-header-small" ? 
			"Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + " :
			"Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector";
			
		return (
			<div className = {`description-common ${this.props.classValue}`}>
				<span>{this.props.title}</span>
			</div>
		);
	} 
});

export default Description;