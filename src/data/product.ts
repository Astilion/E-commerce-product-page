import { Product } from "../types/product";
import productImg1 from "../assets/image-product-1.jpg";
import productImg2 from "../assets/image-product-2.jpg";
import productImg3 from "../assets/image-product-3.jpg";
import productImg4 from "../assets/image-product-4.jpg";
import thumbnailImg1 from "../assets/image-product-1-thumbnail.jpg";
import thumbnailImg2 from "../assets/image-product-2-thumbnail.jpg";
import thumbnailImg3 from "../assets/image-product-3-thumbnail.jpg";
import thumbnailImg4 from "../assets/image-product-4-thumbnail.jpg";

export const product: Product = {
	id: "fall-limited-edition-sneakers",
	brand: "Sneaker Company",
	name: "Fall Limited Edition Sneakers",
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
	price: 250,
	discount: 50,
	images: [productImg1, productImg2, productImg3, productImg4],
	thumbnails: [thumbnailImg1, thumbnailImg2, thumbnailImg3, thumbnailImg4],
};
