import menu from "../../assets/icon-menu.svg";

interface BurgerMenuProps {
	onClick: () => void;
}
export default function BurgerMenu({ onClick }: BurgerMenuProps) {
	return (
		<button
			onClick={onClick}
			aria-label='Navigation menu'
			className='lg:hidden bg-transparent border-none px-2 py-1 z-10'>
			<img src={menu} alt='Menu' />
		</button>
	);
}
