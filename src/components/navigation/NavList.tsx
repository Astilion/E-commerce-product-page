import { useIsMobile } from "../../hooks/useMediaQuery";
import { capitalizeFirstLetter } from "../../utils/string";

const NAV_NAMES = ["collections", "men", "women", "about", "contact"];

const anchorClasses =
	"py-2  px-4 font-bold lg:pb-[39px] lg:px-2 lg:py-2 lg:border-b-4  lg:relative lg:ml-4  lg:hover:border-orange-400 lg:focus:border-orange-400 hover:text-black focus:text-black text-slate-700 transition lg:inline";

interface NavListProps {
	isActive?: boolean;
}

export default function NavList({ isActive }: NavListProps) {
	const isMobile = useIsMobile();

	const mobileUlClasses = isMobile
		? "flex absolute mt-14 flex-col gap-4 duration-300"
		: "";

	const translateXClass = isMobile && !isActive ? "translate-x-[-200%]" : "";

	const ulClasses = `${mobileUlClasses} ${translateXClass} lg:flex lg:flex-row lg:relative gap-4`;
	return (
		<ul className={ulClasses}>
			{NAV_NAMES.map(name => (
				<li key={name}>
					<a href='#' className={anchorClasses}>
						{capitalizeFirstLetter(name)}
					</a>
				</li>
			))}
		</ul>
	);
}
