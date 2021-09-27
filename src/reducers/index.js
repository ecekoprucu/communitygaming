import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import scoreReducer from "./scoreReducer";

export const reducers = combineReducers({
    data: dataReducer,
    score: scoreReducer
})
