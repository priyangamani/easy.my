import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./iconContainer.css";
import Icons from "../Icons/Icons";// eslint-disable-line no-unused-vars
import IconDescription from "../iconDescription/IconDescrption";// eslint-disable-line no-unused-vars
import img1 from "../image/ic_favorite_border_black_36px.png";// eslint-disable-line no-unused-vars
import img2 from "../image/ic_share.png";// eslint-disable-line no-unused-vars

const IconContainer = () => ({
	render(){
		return (
			<div className = {this.props.classValue}>
				<Icons classValue = {this.props.favorite} src = {img1}></Icons>
				<IconDescription classValue = {this.props.wish} iconText = "Wishlist"></IconDescription>
				<Icons classValue = {this.props.share} src = {img2}></Icons>
				<IconDescription classValue = {this.props.shareText} iconText = "Share"></IconDescription>
			</div>
		);
	} 
});

export default IconContainer;