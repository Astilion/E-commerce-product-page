import logo from "../../assets/logo.svg";

export default function Logo() {
	return (
		<a className='p-2' href='#'>
			<img src={logo} alt='Sneakers Logo' />
		</a>
	);
}
