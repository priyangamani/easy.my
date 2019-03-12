import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactButton.css";
import ContactButtonImage from "../contactButtonImage/ContactButtonImage";// eslint-disable-line no-unused-vars
import ContactButtonDescription from "../contactButtonDescription/ContactButtonDescription";// eslint-disable-line no-unused-vars

const ContactButton = () => ({
	render(){
		return (
			<div className = {`contact-button-common ${this.props.classValue}`}>
				<ContactButtonImage 
					classImageValue = {this.props.classImageValue}
					width = {this.props.width} 
					height = {this.props.height}
					src = {this.props.src}>
				</ContactButtonImage>
				<ContactButtonDescription 
					heading = {this.props.heading} 
					classValue = {this.props.contBtnDescClassValue}></ContactButtonDescription>
			</div>
		);
	} 
});

export default ContactButton;