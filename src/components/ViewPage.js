import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Media from "react-media";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Description from "../components/description/Description";
import ImageContainer from "../components/imageContainer/ImageContainer";
import ImageDetail from "../components/imageDetail/ImageDetail";
import breadCrumbVal from "../utils/breadCrumbVariables";
import ContactContainer from "../components/contactContainer/ContactContainer";
import Header from "../components/header/Header";
import { itemsFetchData,getItemDetail} from '../actions/items';


class ViewPage extends React.Component {
	constructor(){
		super();
		this.state = {
			device: "mobile"
		};
	}
	render() {
		console.log("fff",this.props.data.attributes.title);
		const title=this.props.data.attributes.title;
		const price=this.props.data.attributes.price;
		const condition=this.props.data.attributes.condition;
		const location=this.props.data.attributes.location;
		const seller_name=this.props.data.attributes.seller_name;
		const seller_type=this.props.data.attributes.seller_type;
		const phone=this.props.data.attributes.phone;
		const description=this.props.data.attributes.description;
		return (
			<div>
				<Media query = {{maxWidth: 320}} defaultMatches={this.state.device === "mobile"} render={() => (	
					<div>
						<Header classValue = "image-header-medium"/>	
						<Description classValue= "description-header-small" title={title}></Description>
						<ImageContainer classValue= "image-container-small" imageClassvalue = "image-container-image-small"></ImageContainer>
						<ImageDetail classValue= "image-Detail-small"
							iconClassValue = "icon-Container-Big"
							price={price}
							condition={condition}
							location={location}
							sellerName={seller_name}
							sellerType={seller_type}
							description={description}
							priceClassValue = "price-small"
							itemCondClassValue = "item-condition-small"
							itemLocClassValue = "item-location-small"
							sellerClassValue = "seller-small"
							privateSellerClassValue = "private-seller-small"
							priceDescClassValue = "price-desc-small"
							itemCondDescClassValue ="item-con-desc-small"
							itemLocDescClassValue ="item-loc-desc-small "
							sellerDescClassValue="seller-desc-small"
							imageDescBig ="image-desc-small"
							share = "share-small"
							wish = "wish-text-small"
							shareText = "share-text-small"
							favorite = "favorite-small"></ImageDetail>
						<ContactContainer
							classValue="contact-cont-small"
							templateSize = {false}
							phone={phone}
							contactDescClassValue="contact-desc-big"></ContactContainer>
					</div>
			  	)}/>
				<Media query={{maxWidth: 640, minWidth:321}} defaultMatches={this.state.device === "ipad"} render={() => (	
					<div>
						<Header classValue = "image-header-medium"/>
						<Description classValue= "description-header-medium"  title={title}></Description>
						<ImageContainer classValue= "image-container-medium" imageClassvalue = "image-container-image-medium"></ImageContainer>
						<ImageDetail classValue= "image-Detail-medium"
							iconClassValue = "icon-Container-Big"
							priceClassValue = "price-big"
							itemCondClassValue = "item-condition-big"
							itemLocClassValue = "item-location-big"
							sellerClassValue = "seller-big"
							privateSellerClassValue = "private-seller-big"
							priceDescClassValue = "price-desc-big"
							itemCondDescClassValue ="item-con-desc-big"
							itemLocDescClassValue ="item-loc-desc-big"
							sellerDescClassValue="seller-desc-big"
							imageDescBig ="image-desc-big"
							contactContainer="contact-cont-big"
							contactDescClassValue="contact-desc-big"
							share = "share-big"
							wish = "wish-text-big"
							shareText = "share-text-big"
							favorite = "favorite-big"
							price={price}
							condition={condition}
							location={location}
							sellerName={seller_name}
							sellerType={seller_type}
							description={description}
							templateSize = {true}></ImageDetail>
					</div>
			  	)}/>
			  	<Media query="(min-width: 641px)" defaultMatches={this.state.device === "desktop"} render={() => (
					<div>
						<Header classValue = "image-header-big"/>
						<BreadCrumb breadCrumb= {breadCrumbVal}></BreadCrumb>
						<Description classValue= "description-header-big"  title={title}></Description>
						<ImageContainer imageClassvalue = "image-container-image-big" classValue= "image-Container-Big"></ImageContainer>
						<ImageDetail classValue= "image-Detail-Big"
							iconClassValue = "icon-Container-Big"
							priceClassValue = "price-big"
							itemCondClassValue = "item-condition-big"
							itemLocClassValue = "item-location-big"
							sellerClassValue = "seller-big"
							privateSellerClassValue = "private-seller-big"
							priceDescClassValue = "price-desc-big"
							itemCondDescClassValue ="item-con-desc-big"
							itemLocDescClassValue ="item-loc-desc-big "
							sellerDescClassValue="seller-desc-big"
							imageDescBig ="image-desc-big"
							contactContainer="contact-cont-big"
							contactDescClassValue="contact-desc-big"
							share = "share-big"
							wish = "wish-text-big"
							shareText = "share-text-big"
							favorite = "favorite-big"
							price={price}
							condition={condition}
							location={location}
							sellerName={seller_name}
							sellerType={seller_type}
							description={description}
							templateSize = {true}></ImageDetail>
					</div>
			  	)}/>
			</div>
		);
	}
}


ViewPage.propTypes = {
    getItemList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        data: state.itemDetail
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        getItemDetail: (data) => dispatch(getItemDetail(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);