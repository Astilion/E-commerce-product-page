import { useState, useEffect, useRef } from "react";
import Cart from "./Cart";
import cartIcon from "../../assets/icon-cart.svg";
import { useAppSelector } from "../../store/hooks";

export default function CartButton() {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [animate, setAnimate] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const toggleCart = () => {
		setCartIsOpen(prev => !prev);
	};

	const cartItemsQuantity = useAppSelector(state => state.cart.totalQuantity);

	useEffect(() => {
		if (cartItemsQuantity > 0) {
			setAnimate(true);

			const timeout = setTimeout(() => {
				setAnimate(false);
			}, 300);

			return () => clearTimeout(timeout);
		}
	}, [cartItemsQuantity]);

	// Close the cart on Escape or on a click outside of it
	useEffect(() => {
		if (!cartIsOpen) return;

		const keyDownHandler = (event: KeyboardEvent) => {
			if (event.key === "Escape") setCartIsOpen(false);
		};
		const pointerDownHandler = (event: PointerEvent) => {
			if (!containerRef.current?.contains(event.target as Node)) {
				setCartIsOpen(false);
			}
		};

		document.addEventListener("keydown", keyDownHandler);
		document.addEventListener("pointerdown", pointerDownHandler);
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
			document.removeEventListener("pointerdown", pointerDownHandler);
		};
	}, [cartIsOpen]);

	return (
		<div ref={containerRef}>
			<button
				className='p-2 relative'
				onClick={toggleCart}
				aria-label={`Cart, ${cartItemsQuantity} items`}
				aria-expanded={cartIsOpen}>
				<img src={cartIcon} alt='' />
				{cartItemsQuantity > 0 && (
					<span
						className={`bg-orange-500 rounded-[100%] px-[8px] absolute top-0 right-0 text-[10px] text-white font-bold ${
							animate ? "bump" : ""
						}`}>
						{cartItemsQuantity}
					</span>
				)}
			</button>
			{cartIsOpen && <Cart />}
		</div>
	);
}
