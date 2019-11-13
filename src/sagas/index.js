import { fork } from 'redux-saga/effects';
import watchHomePageSaga from './HomePageSaga';

export default function* rootSagas() {
    yield* [
        fork(watchHomePageSaga),
    ];
}
