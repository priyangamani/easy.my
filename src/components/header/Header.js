import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Image from "../image/Image";// eslint-disable-line no-unused-vars
import img from "../image/easy.png";// eslint-disable-line no-unused-vars

const Header = () => ({
	render(){
		return (
			<div className = "header">
				<Image classValue={this.props.classValue} source = {img}></Image>
			</div>
		);
	} 
});

export default Header;