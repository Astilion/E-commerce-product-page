import { describe, expect, it } from "vitest";
import { calculateDiscountedPrice, formatPrice } from "./price";

describe("calculateDiscountedPrice", () => {
	it("applies a percentage discount", () => {
		expect(calculateDiscountedPrice(250, 50)).toBe(125);
	});

	it("returns the original price when there is no discount", () => {
		expect(calculateDiscountedPrice(250, 0)).toBe(250);
	});
});

describe("formatPrice", () => {
	it("formats whole numbers with two decimal places", () => {
		expect(formatPrice(125)).toBe("$125.00");
	});

	it("rounds to two decimal places and adds thousands separators", () => {
		expect(formatPrice(1234.567)).toBe("$1,234.57");
	});
});
