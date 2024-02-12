import ProductDetails from "./ProductDetails";
import ProductPricing from "./ProductPricing";
import ProductQuantityControl from "./ProductQuantityControl";
import cartIcon from '../../../assets/icon-cart-white.svg'

export default function ProductDetailSection() {
	return <section className='p-6 lg:p-10 flex flex-col lg:justify-center '>
        <ProductDetails/>
        <ProductPricing/>
        <div className="lg:flex lg:gap-4">

        <ProductQuantityControl/>
        <button className='bg-orange-500 flex w-full px-4 py-3 items-center justify-center rounded-md my-2 gap-3 hover:bg-orange-400 focus:bg-orange-400 duration-200 lg:w-3/4'>
					<img src={cartIcon} style={{ color: "white" }} alt='' />
					<span className="font-bold text-white">Add to cart</span>
				</button>
        </div>
    </section>;
}
