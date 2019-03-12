import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./icons.css";
import Image from "../image/Image";// eslint-disable-line no-unused-vars

const Icons = () => ({
	render(){
		return (
			<Image classValue={`icons-common-click ${this.props.classValue}` } height = "35" width = "140" source = {this.props.src}></Image>
		);
	} 
});

export default Icons;