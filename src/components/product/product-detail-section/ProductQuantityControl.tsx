import minus from "../../../assets/icon-minus.svg";
import plus from "../../../assets/icon-plus.svg";

interface ProductQuantityControlProps {
	itemQuantity: number;
	incrementQuantity: () => void;
	decrementQuantity: () => void;
}

export default function ProductQuantityControl({
	itemQuantity,
	incrementQuantity,
	decrementQuantity,
}: ProductQuantityControlProps) {
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
