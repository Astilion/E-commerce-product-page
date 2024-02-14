import { useState } from "react";
import Cart from "./cart/Cart";
import cartIcon from "../../assets/icon-cart.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function CartButton() {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const toggleCart = () => {
		setCartIsOpen(prev => !prev);
	};

	const cartItemsQuantity = useSelector(
		(state: RootState) => state.cart.totalQuantity
	);

	return (
		<div>
			<button className='p-2 relative ' onClick={toggleCart}>
				<img src={cartIcon} alt='Cart' />
				{cartItemsQuantity > 0 && (
					<span className='bg-orange-500 rounded-[100%] px-[8px] absolute top-0 right-0 text-[10px] text-white font-bold'>
						{cartItemsQuantity}
					</span>
				)}
			</button>
			{cartIsOpen && <Cart />}
		</div>
	);
}
