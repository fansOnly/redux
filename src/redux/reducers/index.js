import { combineReducers } from 'redux';
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const reducer = combineReducers({
    visibilityFilter,
    todos
})

export default reducer;