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
		"lg:pb-[39px] lg:px-2 lg:py-2 lg:border-b-4  lg:relative  lg:hover:border-orange-400 lg:hover:text-black lg:text-slate-700 transition lg:inline z-100";
	const ulClasses = isMobile
		? "flex absolute mt-14 flex-col gap-4 duration-300 translate-x-[-200%]"
		: "lg:flex lg:flex-row lg:relative gap-4";

	const navIsOpenClasses = isActive ? "translate-x-0" : "";
	return (
		<ul className={`${ulClasses} ${navIsOpenClasses}`}>
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
