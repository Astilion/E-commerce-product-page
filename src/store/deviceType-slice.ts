import { createSlice } from "@reduxjs/toolkit";

interface deviceTypeState {
	isMobile: boolean;
}

const initialState: deviceTypeState = {
	isMobile: window.innerWidth < 1024 ? true : false,
};

const deviceTypeSlice = createSlice({
	name: "deviceType",
	initialState,
	reducers: {
		detectDeviceType(state, action) {
			state.isMobile = action.payload;
		},
	},
});

export const deviceTypeActions = deviceTypeSlice.actions;

export default deviceTypeSlice.reducer;
