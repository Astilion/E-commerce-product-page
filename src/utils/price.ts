export const calculateDiscountedPrice = (
	price: number,
	discount: number
): number => {
	return price * ((100 - discount) / 100);
};

const priceFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

/** Formats a number as a USD price, e.g. 125 -> "$125.00" */
export const formatPrice = (value: number) => priceFormatter.format(value);
