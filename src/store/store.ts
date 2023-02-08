import {combineReducers,configureStore} from "@reduxjs/toolkit";
import canvasSlice from "./reducers/CanvasSlice";
import toolSlice from "./reducers/ToolSlice";


const rootReducer = combineReducers({
    canvasSlice,
    toolSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];