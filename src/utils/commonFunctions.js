let templateDecider = ((bool, comp1, comp2) => {
	return bool ? comp1 : comp2;
});

export default templateDecider;