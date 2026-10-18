import minus from "../../../assets/icon-minus.svg";
import plus from "../../../assets/icon-plus.svg";

interface QuantityControlProps {
	itemQuantity: number;
	incrementQuantity: () => void;
	decrementQuantity: () => void;
}

export default function QuantityControl({
	itemQuantity,
	incrementQuantity,
	decrementQuantity,
}: QuantityControlProps) {
	return (
		<div className='flex justify-between bg-slate-200 items-center px-4 py-3 my-2 rounded-md lg:w-1/3'>
			<button
				onClick={decrementQuantity}
				disabled={itemQuantity <= 1}
				aria-label='Decrease quantity'
				className='p-2 hover:scale-125 focus:scale-125 duration-150 disabled:opacity-40 disabled:hover:scale-100'>
				<img src={minus} alt='' />
			</button>
			<span aria-live='polite'>{itemQuantity}</span>
			<button
				onClick={incrementQuantity}
				aria-label='Increase quantity'
				className='p-2 hover:scale-125 focus:scale-125 duration-150'>
				<img src={plus} alt='' />
			</button>
		</div>
	);
}
