// Combina todos os reducers em um único reducer
import { combineReducers } from 'redux';
import repositories from './repositories';

export default combineReducers({
    repositories,
})