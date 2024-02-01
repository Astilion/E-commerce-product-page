import menu from "../assets/icon-menu.svg";
export default function BurgerMenu() {
	return (
		<button className="bg-transparent border-none px-2 py-1 z-10">
			<img src={menu} alt='Menu' />
		</button>


	);
}
