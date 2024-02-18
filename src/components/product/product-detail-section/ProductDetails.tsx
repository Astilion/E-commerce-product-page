interface ProductDetails {
	annotation: string;
	name: string;
	description: string;
  }
export const productDetails = {
	annotation: "SNEAKER COMPANY",
	name: "Fall Limited Edition Sneakers",
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
};
export default function ProductDetails() {
	const { annotation, name, description } = productDetails;
	return (
		<div className='flex flex-col gap-2'>
			<h3 className='font-bold text-orange-500 text-sm'>{annotation}</h3>
			<h2 className='font-bold text-2xl py-2 lg:text-4xl xl:text-5xl'>
				{name}
			</h2>
			<p className='text-slate-500'>{description}</p>
		</div>
	);
}
