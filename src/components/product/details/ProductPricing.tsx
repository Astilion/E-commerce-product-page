import { calculateDiscountedPrice, formatPrice } from "../../../utils/price";

interface ProductPricingProps {
	price: number;
	discount: number;
}

export default function ProductPricing({ price, discount }: ProductPricingProps) {
	const isDiscount = discount > 0;
	const finalPrice = calculateDiscountedPrice(price, discount);
	return (
		<div className='flex justify-between my-4'>
			<div className='flex gap-5 items-center'>
				<p className='font-bold text-2xl lg:text-3xl'>
					{formatPrice(finalPrice)}
				</p>
				{isDiscount && (
					<span className='text-orange-500 font-bold rounded-md px-2 py-1  bg-orange-200 text-sm'>
						{discount}%
					</span>
				)}
			</div>
			{isDiscount && (
				<span className='font-bold text-gray-400 line-through'>
					{formatPrice(price)}
				</span>
			)}
		</div>
	);
}
