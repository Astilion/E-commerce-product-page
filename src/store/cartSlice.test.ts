import { describe, expect, it } from "vitest";
import cartReducer, { cartActions, initialState } from "./cartSlice";
import { CartItem } from "../types/product";

const sneakers: CartItem = {
	id: "sneakers",
	name: "Fall Limited Edition Sneakers",
	price: 125,
	quantity: 2,
	imgUrl: "thumbnail.jpg",
};

describe("cartSlice", () => {
	it("adds a new product to an empty cart", () => {
		const state = cartReducer(initialState, cartActions.addProductToCart(sneakers));

		expect(state.products).toEqual([sneakers]);
		expect(state.totalQuantity).toBe(2);
	});

	it("increases quantity when the same product is added again", () => {
		let state = cartReducer(initialState, cartActions.addProductToCart(sneakers));
		state = cartReducer(
			state,
			cartActions.addProductToCart({ ...sneakers, quantity: 3 })
		);

		expect(state.products).toHaveLength(1);
		expect(state.products[0].quantity).toBe(5);
		expect(state.totalQuantity).toBe(5);
	});

	it("decreases quantity when removing fewer items than in the cart", () => {
		let state = cartReducer(initialState, cartActions.addProductToCart(sneakers));
		state = cartReducer(
			state,
			cartActions.removeItemsFromCart({ id: sneakers.id, quantity: 1 })
		);

		expect(state.products[0].quantity).toBe(1);
		expect(state.totalQuantity).toBe(1);
	});

	it("removes the product when its last item is removed", () => {
		let state = cartReducer(
			initialState,
			cartActions.addProductToCart({ ...sneakers, quantity: 1 })
		);
		state = cartReducer(
			state,
			cartActions.removeItemsFromCart({ id: sneakers.id, quantity: 1 })
		);

		expect(state.products).toEqual([]);
		expect(state.totalQuantity).toBe(0);
	});

	it("ignores removal of a product that is not in the cart", () => {
		const state = cartReducer(
			initialState,
			cartActions.removeItemsFromCart({ id: "unknown", quantity: 1 })
		);

		expect(state).toEqual(initialState);
	});
});
