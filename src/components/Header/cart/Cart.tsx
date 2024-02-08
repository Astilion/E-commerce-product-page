import img from "../../../assets/image-product-1-thumbnail.jpg";
import trash from "../../../assets/icon-delete.svg";
import { motion } from "framer-motion";

export default function Cart() {
	return (
		<motion.section
			className='absolute w-[370px] flex flex-col left-0 right-0  mx-auto rounded-lg top-24 shadow-lg  py-2 sm:ml-auto sm:mr-4 lg:mt-2'
			variants={{
				hidden: { opacity: 0, y: -30 },
				visible: { opacity: 1, y: 0 },
			}}
			initial='hidden'
			animate='visible'>
			<h2 className='px-4 pt-1 pb-4 self-start font-bold '>Cart</h2>
			<span className='h-[1px] w-full bg-slate-500'></span>

			<ul className='mt-4 flex flex-col gap-y-6 w-full px-4 py-2'>
				<li className='flex  justify-center'>
					<a href='#' className=' flex gap-4 group'>
						<div className='w-14 h-14 rounded-md'>
							<img src={img} alt='' className='w-full h-full rounded-md' />
						</div>
						<div className=' text-slate-500'>
							<h3 className='text-left text-[15px] group-hover:text-orange-500'>
								Fail Limited Edition Sneakers
							</h3>
							<p className='text-left group-hover:text-orange-500'>
								$125 x 3{" "}
								<span className='font-bold text-black group-hover:text-orange-500'>
									$375.00
								</span>
							</p>
						</div>
					</a>
					<div className='flex items-center justify-center ml-6'>
						<button className='p-2'>
							<img src={trash} alt='Delete button' />
						</button>
					</div>
				</li>
			</ul>
			<button className='bg-orange-500 text-white rounded-md w-[80%] mx-auto h-12 my-4 hover:bg-orange-400 duration-200'>
				Checkout
			</button>
		</motion.section>
	);
}
