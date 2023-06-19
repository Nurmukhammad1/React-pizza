import { combineReducers } from 'redux';


import filtersReducer from './filters-reduce';
import pizzasReducer from './puzzas-reduce';



const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
});

export default rootReducer;
