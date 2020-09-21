import { combineReducers } from 'redux';
import fetchDataReducers from "./fetchSpacexData"


const reducers = combineReducers({
data:fetchDataReducers
});

export default reducers;