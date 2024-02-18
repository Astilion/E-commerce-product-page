import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { motion } from "framer-motion";
import { formatPrice } from "../../../utils/priceUtils";
import RemoveItemBtn from "./RemoveItemBtn";

export default function Cart() {
	let content;
	const products = useSelector((state: RootState) => state.cart.products);

	if (products.length > 0) {
		const mappedProducts = products.map(
			({ id, name, price, quantity, imgUrl }) => {
				const totalPrice = formatPrice(price * quantity);
				return (
					<li key={id} className='flex  justify-center'>
						<a href='#' className=' flex gap-4 group'>
							<div className='w-14 h-14 rounded-md'>
								<img
									src={imgUrl}
									alt='Product image'
									className='w-full h-full rounded-md'
								/>
							</div>
							<div className=' text-slate-500'>
								<h3 className='text-left text-[15px] group-hover:text-orange-500'>
									{name}
								</h3>
								<p className='text-left group-hover:text-orange-500'>
									{`$${price} x ${quantity} `}
									<span className='font-bold text-black group-hover:text-orange-500'>
										{`$${totalPrice}`}
									</span>
								</p>
							</div>
						</a>
						<div className='flex items-center justify-center ml-6'>
							<RemoveItemBtn id={id} />
						</div>
					</li>
				);
			}
		);
		content = (
			<>
				<ul className='mt-4 flex flex-col gap-y-6 w-full px-4 py-2'>
					{mappedProducts}
				</ul>
				<button className='bg-orange-500 text-white rounded-md w-[80%] mx-auto h-12 my-4 hover:bg-orange-400 duration-200'>
					Checkout
				</button>
			</>
		);
	} else {
		content = (
			<div className='flex justify-center items-center font-bold h-[168px]'>
				<h3 className='text-slate-500 font bold'>Your cart is empty</h3>
			</div>
		);
	}
	return (
		<motion.section
			className='absolute w-[370px] flex flex-col left-0 right-0  mx-auto rounded-lg top-24 shadow-lg  py-2 sm:ml-auto sm:mr-4 lg:mt-2 bg-white'
			variants={{
				hidden: { opacity: 0, y: -30 },
				visible: { opacity: 1, y: 0 },
			}}
			initial='hidden'
			animate='visible'>
			<h2 className='px-4 pt-1 pb-4 self-start font-bold '>Cart</h2>
			<span className='h-[1px] w-full bg-slate-500'></span>
			{content}
		</motion.section>
	);
}
