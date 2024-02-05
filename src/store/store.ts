import { configureStore } from "@reduxjs/toolkit";
import deviceTypeReducer from "./deviceType-slice";
export const store = configureStore({
	reducer: {
		deviceType: deviceTypeReducer,
	},
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
