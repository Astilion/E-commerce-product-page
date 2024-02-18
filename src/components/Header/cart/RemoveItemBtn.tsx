import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import trash from "../../../assets/icon-delete.svg";

interface RemoveItemBtnProps {
	id: string;
}
export default function RemoveItemBtn({ id }: RemoveItemBtnProps) {
	const dispatch = useDispatch();

	const removeItemFromCartHandler = () => {
		dispatch(cartActions.removeItemsFromCart({ id, quantity: 1 }));
	};
	return (
		<button className='p-2' onClick={removeItemFromCartHandler}>
			<img src={trash} alt='Delete button' />
		</button>
	);
}
