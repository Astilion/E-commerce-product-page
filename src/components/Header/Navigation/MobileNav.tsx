import NavList from "./NavList";

interface MobileNavProps {
	mobileNavIsActive: boolean;
	hideNav: () => void;
}
export default function MobileNav({
	mobileNavIsActive,
	hideNav,
}: MobileNavProps) {
	const bgClasses = mobileNavIsActive
		? " translate-x-0"
		: "translate-x-[-120%]";

	const backdropClasses = mobileNavIsActive
		? "translate-x-[0px]"
		: "translate-x-[300%]";
	return (
		<nav>
			<div
				className={`${bgClasses} absolute top-0 left-0 h-screen-small duration-300 w-2/3 bg-white `}></div>
			<div
				className={` ${backdropClasses} absolute top-0 right-0 h-screen-small duration-500 opacity-75 bg-black w-1/3`}
				onClick={hideNav}></div>

			<NavList isActive={mobileNavIsActive} />
		</nav>
	);
}
