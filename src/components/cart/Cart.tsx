import { motion } from "framer-motion";
import { useAppSelector } from "../../store/hooks";
import CartItem from "./CartItem";

export default function Cart() {
	const products = useAppSelector(state => state.cart.products);

	return (
		<motion.section
			className='absolute w-[95%] max-w-[370px] flex flex-col left-0 right-0  mx-auto rounded-lg top-24 shadow-lg  py-2 sm:ml-auto sm:mr-4 lg:mt-2 bg-white'
			variants={{
				hidden: { opacity: 0, y: -30 },
				visible: { opacity: 1, y: 0 },
			}}
			initial='hidden'
			animate='visible'>
			<h2 className='px-4 pt-1 pb-4 self-start font-bold '>Cart</h2>
			<span className='h-[1px] w-full bg-slate-500'></span>
			{products.length > 0 ? (
				<>
					<ul className='mt-4 flex flex-col gap-y-6 w-full px-4 py-2'>
						{products.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</ul>
					<button className='bg-orange-500 text-white rounded-md w-[80%] mx-auto h-12 my-4 hover:bg-orange-400 duration-200'>
						Checkout
					</button>
				</>
			) : (
				<div className='flex justify-center items-center font-bold h-[168px]'>
					<h3 className='text-slate-500'>Your cart is empty</h3>
				</div>
			)}
		</motion.section>
	);
}
