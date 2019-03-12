import React from "react"; // eslint-disable-line no-unused-vars
import "./mainLayout.css";

const MainLayout = props => ({
	render() {
		return (
			<div className="App">
				<div className = "mainLayout">
					<main>{props.children}</main>
				</div>
			</div>
		);
	}
});

export default MainLayout;