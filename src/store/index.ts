import { configureStore } from "@reduxjs/toolkit";
import deviceTypeReducer from "./deviceType-slice";
const store = configureStore({
	reducer: {
		deviceType: deviceTypeReducer,
	},
});

export default store;
