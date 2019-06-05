import { put, takeLatest, all } from 'redux-saga/effects';

import { GET_REGISTER, GET_EMPLOYEE } from '../actions/index'

function* fetchNews() {
    const json = yield fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json());
    yield put({ type: "NEWS_RECEIVED", json: json, });
}

function* actionWatcher() {
    yield takeLatest('GET_EMPLOYEE', fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}


