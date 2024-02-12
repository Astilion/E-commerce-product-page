import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../store/store";

import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import DesktopNav from "./Navigation/DesktopNav";
import MobileNav from "./Navigation/MobileNav";
import UserProfileButton from "./UserProfileButton";
import CartButton from "./CartButton";
export default function Header() {
	const isMobile = useSelector((state: RootState) => state.deviceType.isMobile);
	const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

	const showMobileNavHandler = () => {
		setMobileNavIsActive(prev => !prev);
	};
	const hideMobileNavHandler = () => {
		setMobileNavIsActive(false);
	};

	const headerClasses =
		"fixed top-0 left-0 right-0 mx-auto flex justify-between w-full p-4 lg:px-12 lg:py-4 max-w-7xl  z-50 items-center border-b-4 z-50 bg-white";
	return (
		<>
			<div className='h-24 lg:h-28'></div>
			<header className={headerClasses}>
				<div className='flex justify-center items-center gap-4'>
					<BurgerMenu
						onClick={showMobileNavHandler}
						mobileNavIsActive={mobileNavIsActive}
					/>
					{isMobile && (
						<MobileNav
							mobileNavIsActive={mobileNavIsActive}
							hideNav={hideMobileNavHandler}
						/>
					)}
					<Logo />
					{!isMobile && <DesktopNav />}
				</div>

				<div className='flex justify-center items-center gap-4'>
					<CartButton />
					<UserProfileButton />
				</div>
			</header>
		</>
	);
}
