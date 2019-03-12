import React from "react"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "./imageDetail.css";
import IconContainer from "../iconContainer/IconContainer";// eslint-disable-line no-unused-vars
import PriceDescription from "../priceDescription/PriceDescription";// eslint-disable-line no-unused-vars
import ItemDetailDescription from "../itemDetailDescription/ItemDetailDescription";// eslint-disable-line no-unused-vars
import ItemDetailHeading from "../itemDetailHeading/ItemDetailHeading";// eslint-disable-line no-unused-vars
import ContactContainer from "../contactContainer/ContactContainer";// eslint-disable-line no-unused-vars
import Image from "../image/Image";// eslint-disable-line no-unused-vars
import img from "../image/ic_account_circle_black_36px.png";// eslint-disable-line no-unused-vars
import HorizontalLine from "../horizontalLine/HorizontalLine";// eslint-disable-line no-unused-vars
import templateDecider from "../../utils/commonFunctions";// eslint-disable-line no-unused-vars

const ImageDetail = () => ({
	render(){
		let dummyDiv = <div></div>;
		return (
			<div className = {`image-Detail-common ${this.props.classValue}` }>
				<IconContainer share = {this.props.share} shareText = {this.props.shareText} wish = {this.props.wish} favorite = {this.props.favorite} classValue = {this.props.iconClassValue}></IconContainer>
				<ItemDetailHeading classValue = {this.props.priceClassValue} heading = "Price" ></ItemDetailHeading>
				<PriceDescription classValue = {this.props.priceDescClassValue} heading = {this.props.price}></PriceDescription>
				<ItemDetailHeading classValue = {this.props.itemCondClassValue} heading = "Item Condition"></ItemDetailHeading>
				<ItemDetailDescription classValue = {this.props.itemCondDescClassValue} heading = {this.props.condition}></ItemDetailDescription>
				<ItemDetailHeading classValue = {this.props.itemLocClassValue} heading = "Item Location"></ItemDetailHeading>
				<ItemDetailDescription classValue = {this.props.itemLocDescClassValue} heading = {this.props.location}></ItemDetailDescription>
				{templateDecider(this.props.templateSize, dummyDiv, (<HorizontalLine classValue = "horizontal-line-small-1"></HorizontalLine>))}
				<ItemDetailHeading classValue = {this.props.sellerClassValue} heading = "Seller Info" ></ItemDetailHeading>
				<ItemDetailDescription classValue = {this.props.sellerDescClassValue} heading = {this.props.sellerName}></ItemDetailDescription>
				<Image classValue= {this.props.imageDescBig} height = "48" width = "48" source = {img}></Image>
				<ItemDetailHeading classValue = {this.props.privateSellerClassValue} heading ={this.props.sellerType} ></ItemDetailHeading>
				{templateDecider(this.props.templateSize, 
					<HorizontalLine classValue = "horizontal-line-big"></HorizontalLine>, 
					<HorizontalLine classValue = "horizontal-line-small-2"></HorizontalLine>)}
				{templateDecider(this.props.templateSize, 
					<ContactContainer 
						classValue = {this.props.contactContainer}
						templateSize = {this.props.templateSize} 
						contactDescClassValue = {this.props.contactDescClassValue}></ContactContainer>, 
					dummyDiv)}
			</div>
		);
	} 
});

export default ImageDetail;