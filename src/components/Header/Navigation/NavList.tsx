import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const capitalizeFirstLetter = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

export default function NavList() {
	const isMobile = useSelector((state: RootState) => state.deviceType.isMobile);
	const navNames: string[] = [
		"collections",
		"men",
		"women",
		"about",
		"contact",
	];

	const anchorClasses = isMobile
		? ""
		: "lg:pb-[39px] lg:px-2 lg:py-2 lg:border-b-4  lg:relative  lg:hover:border-orange-400 lg:hover:text-black lg:text-slate-700 transition lg:inline";
	const ulClasses = isMobile
		? "flex absolute flex-col gap-4 transition translate-x-[-200%]"
		: "lg:flex lg:flex-row lg:relative gap-4";

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
