import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";

export default function Product() {
	return (
		<>
			<section></section>
			<section className='p-6'>
				<div className='flex flex-col gap-2'>
					<h3 className='font-bold text-orange-500 text-sm'>SNEAKER COMPANY</h3>
					<h2 className='font-bold text-2xl py-2'>
						Fall Limited Edition Sneakers
					</h2>
					<p className='text-slate-500'>
						These low-profile sneakers are your perfect casual wear companion.
						Featurign a durable rubber outer sole, they'll withstand everything
						the weather can offer.
					</p>
				</div>

				<div className='flex justify-between my-4'>
					<div className='flex gap-5 items-cente'>
						<h3 className='font-bold text-2xl'>$125</h3>
						<span className='text-orange-500 font-bold rounded-md px-2 py-1 bg-orange-200 text-sm'>
							50%
						</span>
					</div>
					<span className='font-bold text-gray-400 line-through'>$250.00</span>
				</div>
				<div className='flex justify-between bg-slate-200 items-center px-4 py-2 rounded-md'>
					<button className='p-2 hover:scale-125 duration-150'>
						<img src={minus} alt='minus button' />
					</button>
					<span>0</span>
					<button className='p-2 hover:scale-125 duration-150'>
						<img src={plus} alt='plus button' />
					</button>
				</div>
			</section>
		</>
	);
}
