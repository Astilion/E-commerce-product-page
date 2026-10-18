import { CartItem as CartItemType } from "../../types/product";
import { formatPrice } from "../../utils/price";
import RemoveItemButton from "./RemoveItemButton";

interface CartItemProps {
	item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
	const { id, name, price, quantity, imgUrl } = item;

	return (
		<li className='flex justify-center'>
			<div className='flex gap-4'>
				<img src={imgUrl} alt={name} className='w-14 h-14 rounded-md' />
				<div className='text-slate-500'>
					<h3 className='text-left text-[15px]'>{name}</h3>
					<p className='text-left'>
						{`${formatPrice(price)} x ${quantity} `}
						<span className='font-bold text-black'>
							{formatPrice(price * quantity)}
						</span>
					</p>
				</div>
			</div>
			<div className='flex items-center justify-center ml-6'>
				<RemoveItemButton id={id} name={name} />
			</div>
		</li>
	);
}
