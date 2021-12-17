import * as actionTypes from '../constants/index';

const collapse = (state = { isCollapsed: false }, action) => {
	switch (action.type) {
		case actionTypes.SET_COLLAPSE:
			return action.data;
		default:
			return state;
	}
};

export { collapse };
