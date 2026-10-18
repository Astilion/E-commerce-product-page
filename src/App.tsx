import Header from "./components/layout/Header";
import Wrapper from "./components/layout/Wrapper";
import Footer from "./components/layout/Footer";
import Product from "./components/product/Product";
import { product } from "./data/product";

function App() {
	return (
		<>
			<Header />
			<Wrapper>
				<Product product={product} />
			</Wrapper>
			<Footer />
		</>
	);
}

export default App;
