import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface NavListProps {
	isActive?: boolean;
}
const capitalizeFirstLetter = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

export default function NavList({ isActive }: NavListProps) {
	const isMobile = useSelector((state: RootState) => state.deviceType.isMobile);
	const navNames: string[] = [
		"collections",
		"men",
		"women",
		"about",
		"contact",
	];

	const anchorClasses =
		"py-2  px-4 font-bold lg:pb-[39px] lg:px-2 lg:py-2 lg:border-b-4  lg:relative lg:ml-4  lg:hover:border-orange-400 hover:text-black text-slate-700 transition lg:inline z-100";

	const mobileUlClasses = isMobile
		? "flex absolute mt-14 flex-col gap-4 duration-300"
		: "";

	const translateXClass = isMobile && !isActive ? "translate-x-[-200%]" : "";

	const ulClasses = `${mobileUlClasses} ${translateXClass} lg:flex lg:flex-row lg:relative gap-4`;
	return (
		<ul className={ulClasses}>
			{navNames.map((name, index) => (
				<li key={index}>
					<a href='#' className={anchorClasses}>
						{capitalizeFirstLetter(name)}
					</a>
				</li>
			))}
		</ul>
	);
}
