import CloseIcon from "../ui/icons/CloseIcon";
import BurgerIcon from "../ui/icons/BurgerIcon";
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
			className='lg:hidden bg-transparent border-none px-2 py-1 z-50'>
			{mobileNavIsActive && <CloseIcon iconColor={"#69707D"} />}
			{!mobileNavIsActive && <BurgerIcon iconColor={"69707D"} />}
		</button>
	);
}
