import { useAppDispatch } from "../../store/hooks";
import { cartActions } from "../../store/cartSlice";
import trash from "../../assets/icon-delete.svg";

interface RemoveItemButtonProps {
	id: string;
	name: string;
}
export default function RemoveItemButton({ id, name }: RemoveItemButtonProps) {
	const dispatch = useAppDispatch();

	const removeItemFromCartHandler = () => {
		dispatch(cartActions.removeItemsFromCart({ id, quantity: 1 }));
	};
	return (
		<button
			className='p-2'
			onClick={removeItemFromCartHandler}
			aria-label={`Remove one ${name} from cart`}>
			<img src={trash} alt='' />
		</button>
	);
}
