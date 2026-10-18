import { Product as ProductType } from "../../types/product";
import ProductGallery from "./gallery/ProductGallery";
import ProductDetailsSection from "./details/ProductDetailsSection";

interface ProductProps {
	product: ProductType;
}

export default function Product({ product }: ProductProps) {
	return (
		<>
			<ProductGallery images={product.images} thumbnails={product.thumbnails} />
			<ProductDetailsSection product={product} />
		</>
	);
}
