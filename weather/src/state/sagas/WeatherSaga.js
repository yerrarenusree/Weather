import { takeLatest, call, put} from 'redux-saga/effects';
import { GET_WEATHER, FETCH_WEATHER, SET_ERROR } from '../ActionTypes';
import { openweathermap_api_key } from '../../../config.json';

export function* sagaWatcher() {
  yield takeLatest(GET_WEATHER, saga);
}

export function* saga({payload}) {
  try {
    const res = yield fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${payload}&appid=${openweathermap_api_key}`);
    if (!res.ok) {
      const resData = yield res.json();
      throw new Error(resData.message);
    }
    const weatherData = yield res.json();
    yield put({ type: FETCH_WEATHER, payload: weatherData.list});
  } catch (err) {
    yield put({type: SET_ERROR , payload: err.message});
  }
}

