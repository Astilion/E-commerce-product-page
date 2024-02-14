import { useState } from "react";
import minus from "../../../assets/icon-minus.svg";
import plus from "../../../assets/icon-plus.svg";

export default function ProductQuantityControl() {
	const [itemQuantity, setItemQuantity] = useState(0);

	const incrementQuantity = () => setItemQuantity(prevQuantity => prevQuantity + 1);
	const decrementQuantity = () =>
		setItemQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
	return (
		<div className='flex justify-between bg-slate-200 items-center px-4 py-3 my-2 rounded-md lg:w-1/3'>
			<button
				onClick={decrementQuantity}
				className='p-2 hover:scale-125 focus:scale-125 duration-150'>
				<img src={minus} alt='minus button' />
			</button>
			<span>{itemQuantity}</span>
			<button
				onClick={incrementQuantity}
				className='p-2 hover:scale-125 focus:scale-125 duration-150'>
				<img src={plus} alt='plus button' />
			</button>
		</div>
	);
}
