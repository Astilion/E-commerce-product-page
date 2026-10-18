export interface Product {
	id: string;
	brand: string;
	name: string;
	description: string;
	price: number;
	/** Discount in percent, 0 when the product is not on sale */
	discount: number;
	images: string[];
	thumbnails: string[];
}

export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	imgUrl: string;
}
