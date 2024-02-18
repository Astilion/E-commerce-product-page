export const calculateTotalPrice = (
	price: number,
	discount: number
): number => {
	return price * ((100 - discount) / 100);
};

export const formatPrice = (number: number) => {
	return Number.isInteger(number) ? `${number}.00` : number.toFixed(2);
};
