import * as actionTypes from '../constants/index';
const setCollapse = data => {
	return {
		type: actionTypes.SET_COLLAPSE,
		data
	};
};

export { setCollapse };
