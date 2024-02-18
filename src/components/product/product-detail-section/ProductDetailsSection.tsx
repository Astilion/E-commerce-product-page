import ProductDetails, { productDetails } from "./ProductDetails";
import ProductPricing, { pricing } from "./ProductPricing";
import ProductQuantityControl from "./ProductQuantityControl";
import cartIcon from "../../../assets/icon-cart-white.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { calculateTotalPrice } from "../../../utils/priceUtils";

export default function ProductDetailSection() {
	const [itemQuantity, setItemQuantity] = useState(0);
	const dispatch = useDispatch();
	const incrementQuantity = () =>
		setItemQuantity(prevQuantity => prevQuantity + 1);
	const decrementQuantity = () =>
		setItemQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));

	const totalPrice = calculateTotalPrice(pricing.price, pricing.discount);

	const handleAddToCart = () => {
		dispatch(
			cartActions.addProductToCart({
				id: productDetails.name,
				name: productDetails.name,
				price: pricing.discount ? totalPrice : pricing.price,
				quantity: itemQuantity,
			})
		);
	};
	return (
		<section className='p-6 lg:p-10 flex flex-col lg:justify-center lg:mb-40'>
			<ProductDetails />
			<ProductPricing />
			<div className='lg:flex lg:gap-4'>
				<ProductQuantityControl
					itemQuantity={itemQuantity}
					incrementQuantity={incrementQuantity}
					decrementQuantity={decrementQuantity}
				/>
				<button
					className='bg-orange-500 flex w-full px-4 py-3 items-center justify-center rounded-md my-2 gap-3 hover:bg-orange-400 focus:bg-orange-400 duration-200 lg:w-3/4'
					onClick={handleAddToCart}>
					<img src={cartIcon} style={{ color: "white" }} alt='' />
					<span className='font-bold text-white'>Add to cart</span>
				</button>
			</div>
		</section>
	);
}
