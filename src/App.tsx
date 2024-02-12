import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { deviceTypeActions } from "./store/deviceType-slice";
import Wrapper from "./components/ui/Wrapper";
import Product from "./components/product/Product";
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const detectDeviceHandler = () => {
			const isMobile = window.innerWidth < 1024 ? true : false;

			dispatch(deviceTypeActions.detectDeviceType(isMobile));
		};

		window.addEventListener("resize", detectDeviceHandler);
	}, []);

	return (
		<>
			<Header />
			<Wrapper>
				<Product />
			</Wrapper>
			<div className='h-screen'></div>
			Sneaker Company Fall Limited Edition Sneakers These low-profile sneakers
			are your perfect casual wear companion. Featuring a durable rubber outer
			sole, they’ll withstand everything the weather can offer. $125.00 50%
			$250.00 0 Add to cart
			<div>
				Challenge by
				<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
					Frontend Mentor
				</a>
				. Coded by <a href='https://github.com/Astilion'>Mateusz Kamiński</a>.
			</div>
		</>
	);
}

export default App;
