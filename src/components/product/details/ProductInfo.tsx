interface ProductInfoProps {
	brand: string;
	name: string;
	description: string;
}

export default function ProductInfo({
	brand,
	name,
	description,
}: ProductInfoProps) {
	return (
		<div className='flex flex-col gap-2'>
			<p className='font-bold text-orange-500 text-sm uppercase tracking-widest'>
				{brand}
			</p>
			<h1 className='font-bold text-2xl py-2 lg:text-4xl xl:text-5xl'>
				{name}
			</h1>
			<p className='text-slate-500'>{description}</p>
		</div>
	);
}
