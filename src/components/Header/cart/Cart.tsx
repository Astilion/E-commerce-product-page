import img from '../../../assets/image-product-1-thumbnail.jpg'
export default function Cart() {
	return (
		<section className='absolute w-[95%] flex flex-col items-center text-center left-0 right-0 mx-auto rounded-lg top-24 bg-red-500  py-2'>
			<h2 className='px-4 pt-1 pb-4 self-start font-bold '>
				Cart
			</h2>
				<span className='h-[1px] w-full bg-slate-500'></span>

			<ul className='mt-4 flex flex-col gap-y-6'>
				<li className='flex items-center gap-x-2'>
					<a href='#' className=''>
                        <img src={img} alt="" className=''/>
            
						<h3 className='text-left '>Sneakers</h3>
						<p className='text-left'>
							$125 x 3 <span className='font-bold'>$375.00</span>
						</p>
					</a>
				</li>

			</ul>
		</section>
	);
}
