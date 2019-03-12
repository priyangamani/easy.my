import React from "react"; // eslint-disable-line no-unused-vars

import "bootstrap/dist/css/bootstrap.min.css";
import "./contactButtonImage.css";
import Image from "../image/Image";// eslint-disable-line no-unused-vars

const ContactButtonImage = () => ({
	render(){
		return (
			<div className = {`contact-icon-common  ${this.props.classValue}`}>
				<Image classValue={this.props.classImageValue} 
					height = {this.props.height} 
					width = {this.props.width} 
					source = {this.props.src}></Image>
			</div>
		);
	} 
});

export default ContactButtonImage;