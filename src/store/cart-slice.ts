import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
	id: string;
	quantity: number;
	price: number;
	name: string;
}
interface CartState {
	totalQuantity: number;
	products: Product[];
	totalPrice: number | null;
}
const initialState: CartState = {
	totalQuantity: 0,
	products: [],
	totalPrice: null,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart(state, action: PayloadAction<Product>) {
			const existingProduct = state.products.findIndex(
				product => product.id === action.payload.id
			);

			state.totalQuantity += action.payload.quantity;

			if (existingProduct !== -1) {
				// If product already exists, update the quantity
				state.products[existingProduct].quantity += action.payload.quantity;
			} else {
				// If product doesn't exist, add it to the cart
				state.products.push(action.payload);
			}
		},
		replaceCart(state, action) {
			state.products = action.payload.products;
			state.totalQuantity = action.payload.totalQuantity;
		},
		removeItemsFromCart(state, action) {
			const productIdToRemove = action.payload.id;
			const removeQuantity = action.payload.quantity;

			const productIndex = state.products.findIndex(
				product => product.id === productIdToRemove
			);

			if (productIndex !== -1) {
				const existingProduct = state.products[productIndex];

				if (
					existingProduct.quantity === 1 ||
					existingProduct.quantity <= removeQuantity
				) {
					state.totalQuantity -= existingProduct.quantity;
					state.products.splice(productIndex, 1);
				} else {
					existingProduct.quantity -= removeQuantity;
					state.totalQuantity -= removeQuantity;
				}
			}
		},
		handleProductQuantity(state, action) {
			const productIdToHandle = action.payload.id;
			const newQuantity = Number(action.payload.quantity);

			const productIndex = state.products.findIndex(
				product => product.id === productIdToHandle
			);

			if (productIndex !== -1) {
				const existingProduct = state.products[productIndex];

				if (newQuantity === 0) {
					// Remove the entire product if newQuantity is 0
					state.totalQuantity -= existingProduct.quantity;
					state.products.splice(productIndex, 1);
				} else {
					// Update the quantity of the existing product
					state.totalQuantity += newQuantity - existingProduct.quantity;
					existingProduct.quantity = newQuantity;
				}
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
