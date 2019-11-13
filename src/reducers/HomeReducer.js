import {
    HOME_PAGE_SUCCESS,
    HOME_PAGE_FAILURE,
    RESET_HOME_PAGE
} from '../actionTypes/HomeActionTypes';

const INITIAL_STATE = {
    data: {},
    error: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HOME_PAGE_SUCCESS:
            return { ...state, data: action.payload }
        case HOME_PAGE_FAILURE:
            return { ...state, error: action.payload }
        case RESET_HOME_PAGE:
            return { state }
        default:
                return state
    }
}