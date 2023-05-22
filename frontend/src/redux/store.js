import {legacy_createStore as createStore, combineReducers} from 'redux';
import usersReducer from './users/usersReducers'


const combinedReducers = combineReducers({
    users: usersReducer,
})


const store=createStore(
    combinedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;