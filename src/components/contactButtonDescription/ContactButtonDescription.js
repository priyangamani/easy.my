import React from "react"; // eslint-disable-line no-unused-vars

import "bootstrap/dist/css/bootstrap.min.css";
import "./contactButtonDescription.css";

const ContactButtonDescription = () => ({
	render(){
		return (
			<div className = {`contact-btn-common  ${this.props.classValue}`}>
				<span>{this.props.heading}</span>
			</div>
		);
	} 
});

export default ContactButtonDescription;