import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../types/product";

interface CartState {
	totalQuantity: number;
	products: CartItem[];
}

interface RemovePayload {
	id: string;
	quantity: number;
}

export const initialState: CartState = {
	totalQuantity: 0,
	products: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart(state, action: PayloadAction<CartItem>) {
			const existingProduct = state.products.find(
				product => product.id === action.payload.id
			);

			state.totalQuantity += action.payload.quantity;

			if (existingProduct) {
				existingProduct.quantity += action.payload.quantity;
			} else {
				state.products.push(action.payload);
			}
		},
		removeItemsFromCart(state, action: PayloadAction<RemovePayload>) {
			const { id, quantity } = action.payload;
			const productIndex = state.products.findIndex(
				product => product.id === id
			);

			if (productIndex === -1) return;

			const existingProduct = state.products[productIndex];

			if (existingProduct.quantity <= quantity) {
				// Removing all (or more) units drops the product from the cart
				state.totalQuantity -= existingProduct.quantity;
				state.products.splice(productIndex, 1);
			} else {
				existingProduct.quantity -= quantity;
				state.totalQuantity -= quantity;
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
