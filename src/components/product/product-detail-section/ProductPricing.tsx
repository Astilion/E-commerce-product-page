import { calculateTotalPrice, formatPrice } from "../../../utils/priceUtils";
export const pricing = {
	price: 250,
	discount: 50,
};
export default function ProductPricing() {
	const { price, discount } = pricing;
	const isDiscount = Boolean(discount);
	const totalPrice = calculateTotalPrice(price, discount);
	return (
		<div className='flex justify-between my-4'>
			<div className='flex gap-5 items-center'>
				<p className='font-bold text-2xl lg:text-3xl'>
					${formatPrice(totalPrice)}
				</p>
				{isDiscount && (
					<span className='text-orange-500 font-bold rounded-md px-2 py-1  bg-orange-200 text-sm'>
						{discount}%
					</span>
				)}
			</div>
			{isDiscount && (
				<span className='font-bold text-gray-400 line-through'>
					${formatPrice(price)}
				</span>
			)}
		</div>
	);
}
