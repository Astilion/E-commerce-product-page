import { useState } from "react";
import { Product } from "../../../types/product";
import { useAppDispatch } from "../../../store/hooks";
import { cartActions } from "../../../store/cartSlice";
import { calculateDiscountedPrice } from "../../../utils/price";
import ProductInfo from "./ProductInfo";
import ProductPricing from "./ProductPricing";
import QuantityControl from "./QuantityControl";
import cartIcon from "../../../assets/icon-cart-white.svg";

interface ProductDetailsSectionProps {
	product: Product;
}

export default function ProductDetailsSection({
	product,
}: ProductDetailsSectionProps) {
	const [itemQuantity, setItemQuantity] = useState(1);
	const dispatch = useAppDispatch();
	const incrementQuantity = () =>
		setItemQuantity(prevQuantity => prevQuantity + 1);
	const decrementQuantity = () =>
		setItemQuantity(prevQuantity => Math.max(1, prevQuantity - 1));

	const handleAddToCart = () => {
		dispatch(
			cartActions.addProductToCart({
				id: product.id,
				name: product.name,
				price: calculateDiscountedPrice(product.price, product.discount),
				quantity: itemQuantity,
				imgUrl: product.thumbnails[0],
			})
		);
		setItemQuantity(1);
	};
	return (
		<section className='p-6 lg:p-10 flex flex-col lg:justify-center lg:mb-40'>
			<ProductInfo
				brand={product.brand}
				name={product.name}
				description={product.description}
			/>
			<ProductPricing price={product.price} discount={product.discount} />
			<div className='lg:flex lg:gap-4'>
				<QuantityControl
					itemQuantity={itemQuantity}
					incrementQuantity={incrementQuantity}
					decrementQuantity={decrementQuantity}
				/>
				<button
					className='bg-orange-500 flex w-full px-4 py-3 items-center justify-center rounded-md my-2 gap-3 hover:bg-orange-400 focus:bg-orange-400 duration-200 lg:w-3/4'
					onClick={handleAddToCart}>
					<img src={cartIcon} alt='' />
					<span className='font-bold text-white'>Add to cart</span>
				</button>
			</div>
		</section>
	);
}
