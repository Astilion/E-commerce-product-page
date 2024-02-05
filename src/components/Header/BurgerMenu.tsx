import menu from "../../assets/icon-menu.svg";
import close from "../../assets/icon-close.svg";

interface BurgerMenuProps {
	onClick: () => void;
	mobileNavIsActive: boolean;
}
export default function BurgerMenu({
	onClick,
	mobileNavIsActive,
}: BurgerMenuProps) {
	return (
		<button
			onClick={onClick}
			aria-label='Navigation menu'
			className='lg:hidden bg-transparent border-none px-2 py-1 z-10'>
			{mobileNavIsActive && <img src={close} alt='Close menu' />}
			{!mobileNavIsActive && <img src={menu} alt='Menu' />}
		</button>
	);
}
