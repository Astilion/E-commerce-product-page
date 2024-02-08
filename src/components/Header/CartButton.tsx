import { useState } from "react";
import Cart from "./cart/Cart";
import cartIcon from "../../assets/icon-cart.svg";

export default function CartButton() {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const toggleCart = () => {
		setCartIsOpen(prev => !prev);
	};

	return (
		<div>
			<button className='p-2' onClick={toggleCart}>
				<img src={cartIcon} alt='Cart' />
			</button>
			{cartIsOpen && <Cart />}
		</div>
	);
}
