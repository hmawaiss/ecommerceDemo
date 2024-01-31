import { combineReducers } from "redux";
import { basketReducer } from "./basketReducers";

export const rootReducer = combineReducers({
    basket: basketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;