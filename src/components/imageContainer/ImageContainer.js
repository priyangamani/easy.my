import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./imageContainer.css";
import Image from "../image/Image"; // eslint-disable-line no-unused-vars
import img from "../image/Image5.png"; // eslint-disable-line no-unused-vars

const ImageContainer = () => ({
	render(){
		return (
			<div className = {`image-container-common  ${this.props.classValue}` }>
				<Image classValue={this.props.imageClassvalue}  source = {img} ></Image>
			</div>
		);
	} 
});

export default ImageContainer;