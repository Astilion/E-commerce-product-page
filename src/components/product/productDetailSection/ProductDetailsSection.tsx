import ProductDetails from "./ProductDetails";
import ProductPricing from "./ProductPricing";
import ProductQuantityControl from "./ProductQuantityControl";
import cartIcon from '../../../assets/icon-cart-white.svg'

export default function ProductDetailSection() {
	return <section className='p-6'>
        <ProductDetails/>
        <ProductPricing/>
        <ProductQuantityControl/>
        <button className='bg-orange-500 flex w-full px-4 py-3 items-center justify-center rounded-md my-2 gap-3'>
					<img src={cartIcon} style={{ color: "white" }} alt='' />
					<span className="font-bold text-white">Add to cart</span>
				</button>
    </section>;
}
