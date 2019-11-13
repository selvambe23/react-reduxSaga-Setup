import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
    HOME_PAGE_REQUEST,
    HOME_PAGE_SUCCESS,
    HOME_PAGE_FAILURE
} from '../actionTypes/HomeActionTypes';

const url = 'http://dummy.restapiexample.com/api/v1/employees';

function getApi(params) {
    return axios.request({
      method: 'get',
      url,
    });
}

export function* fetchHomePageData(action) {
    try {
        const pickResponse = yield call(getApi, action);
       const responseData = pickResponse.data || {};
        if (pickResponse.status === 200) {
            yield put({
                type: HOME_PAGE_SUCCESS,
                payload: responseData,
            });
        } else {
            yield put({
                type: HOME_PAGE_FAILURE,
                error: responseData,
            });
        }
    } catch (error) {
        yield put({ type: HOME_PAGE_FAILURE, error });
    }
}

export default function* watchHomePageSaga() {
    yield takeLatest(HOME_PAGE_REQUEST, fetchHomePageData);
}

