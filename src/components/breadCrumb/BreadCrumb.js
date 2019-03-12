import React from "react"; // eslint-disable-line no-unused-vars

import "bootstrap/dist/css/bootstrap.min.css";
import "./breadCrumb.css";

const BreadCrumb = () => ({
	createTemplate () {
		let template = this.props.breadCrumb.map((item,index) => {
			return <span className="breadcrumb-span" key={index}>{item}</span>;
		});
		return template;
	},
    
	render(){
		return (
			<div className= "breadCrumb">
				{this.createTemplate()}
			</div>
		);
	} 
});

export default BreadCrumb;