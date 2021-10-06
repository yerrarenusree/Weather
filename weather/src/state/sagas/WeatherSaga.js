import {put} from 'redux-saga/effects';
import { GET_WEATHER } from '../ActionTypes';

export function* sagaWatcher() {
  yield takeLatest(GET_WEATHER, saga);
}

export function* saga() {
    yield put({type: GET_WEATHER});
}
