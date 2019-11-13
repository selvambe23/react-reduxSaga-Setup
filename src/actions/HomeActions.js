import {
    HOME_PAGE_REQUEST,
} from '../actionTypes/HomeActionTypes';

export const homePageRequest = (payload={}) => ({
    type: HOME_PAGE_REQUEST,
    payload,
});