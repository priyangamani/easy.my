import Header from "./Header";
 
it ("renders correctly", () => {
	const wrapper = shallow(
		<Header headerText = {"Its a header"}/>
	);

	expect(wrapper).toMatchSnapShot();
});