import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactContainer.css";
import ContactButton from "../contactButton/ContactButton";// eslint-disable-line no-unused-vars
import ContactDescription from "../contactDescription/ContactDescription";// eslint-disable-line no-unused-vars
import img from "../image/ic_call_black_24px.png";// eslint-disable-line no-unused-vars
import img1 from "../image/ic_email_black_24px.png";// eslint-disable-line no-unused-vars
import img2 from "../image/ic_chat_24px.png";// eslint-disable-line no-unused-vars


const ContactContainer = () => ({
	render(){
		let templateSize = this.props.templateSize;
		return (
			<div className = {this.props.classValue}>
				{templateSize ? (
					<ContactDescription classValue = {this.props.contactDescClassValue} 
						heading = "Interested with the ad? Contact the seller"></ContactDescription>
				):(<div></div>)}
				<ContactButton
					heading = "017 6895xxx"
					width = "18.34"
					height = "18"
					src ={img}
					contBtnDescClassValue = {templateSize ? ("contact-btn-phone-description-big"):("contact-btn-phone-description-small") }
					classValue  = {templateSize ? "contact-button-chat-big": "contact-button-chat-small" }
					classImageValue = {templateSize ? "contact-chat-big": "contact-chat-small" }>
				</ContactButton>
				<ContactButton 
					heading = "Email"
					width = "25.05"
					height = "24"
					src = {img1}
					classValue  = {templateSize ? "contact-button-email-big" : "contact-button-email-small"}
					contBtnDescClassValue = {templateSize ? "contact-btn-email-description-big" : "contact-btn-email-description-small"}
					classImageValue = {templateSize ? "contact-email-big" :"contact-email-small"}
				></ContactButton>
				<ContactButton 
					heading = "Chat"
					width = "25.05"
					height = "24"
					src = {img2}
					classValue  = {templateSize ? "contact-button-live-big" : "contact-button-live-small"}
					contBtnDescClassValue = {templateSize ? "contact-btn-live-description-big" : "contact-btn-live-description-small"} 
					classImageValue = {templateSize ? "contact-email-big" :"contact-email-small"}
				></ContactButton>
			</div>
		);
	} 
});

export default ContactContainer;