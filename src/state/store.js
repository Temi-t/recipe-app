//create store here/ you must combineReducers
import {createStore} from redux;
import recipesReducer from "./reducers/recipesReducer";

const store = createStore(recipesReducer)
