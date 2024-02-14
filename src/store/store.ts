import { configureStore } from "@reduxjs/toolkit";
import deviceTypeReducer from "./deviceType-slice";
import cartReducer from "./cart-slice";
export const store = configureStore({
	reducer: {
		deviceType: deviceTypeReducer,
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
