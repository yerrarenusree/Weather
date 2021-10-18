import { createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga'
import weatherReducer from './reducers/WeatherReducer';
import weatherSaga from './sagas/root.saga';

const rootReducer = combineReducers({
    weather: weatherReducer,
});
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )
sagaMiddleware.run(weatherSaga)

export default store;