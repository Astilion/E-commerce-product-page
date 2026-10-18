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
			const isMobile = window.innerWidth < 1024;

			dispatch(deviceTypeActions.detectDeviceType(isMobile));
		};

		window.addEventListener("resize", detectDeviceHandler);
		return () => window.removeEventListener("resize", detectDeviceHandler);
	}, [dispatch]);

	return (
		<>
			<Header />
			<Wrapper>
				<Product />
			</Wrapper>
			<footer className='py-6 text-center text-sm text-slate-500'>
				Challenge by{" "}
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'
					rel='noopener noreferrer'
					className='text-orange-500 hover:underline'>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href='https://github.com/Astilion'
					target='_blank'
					rel='noopener noreferrer'
					className='text-orange-500 hover:underline'>
					Mateusz Kamiński
				</a>
				.
			</footer>
		</>
	);
}

export default App;
