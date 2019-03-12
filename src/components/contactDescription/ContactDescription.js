import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactDescription.css";

const ContactDescription = () => ({
	render(){
		return (
			<div className = {this.props.classValue}>
				<span>{this.props.heading}</span>
			</div>
		);
	} 
});

export default ContactDescription;