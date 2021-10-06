import {all} from 'redux-saga/effects';
import {sagaWatcher as WeatherSaga} from './WeatherSaga';

export default function* rootSaga() {
    yield all([
        WeatherSaga(),
    ]);
}