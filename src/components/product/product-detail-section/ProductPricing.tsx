export default function ProductPricing() {
	return (
		<div className='flex justify-between my-4'>
			<div className='flex gap-5 items-cente'>
				<h3 className='font-bold text-2xl'>$125</h3>
				<span className='text-orange-500 font-bold rounded-md px-2 py-1 bg-orange-200 text-sm'>
					50%
				</span>
			</div>
			<span className='font-bold text-gray-400 line-through'>$250.00</span>
		</div>
	);
}
