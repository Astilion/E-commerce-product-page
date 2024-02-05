import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../store/store";

import Logo from "./Logo";
import cartIcon from "../../assets/icon-cart.svg";
import BurgerMenu from "./BurgerMenu";
import DesktopNav from "./Navigation/DesktopNav";
import MobileNav from "./Navigation/MobileNav";
import avatar from "../../assets/image-avatar.png";
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
		"fixed top-0 left-0 right-0 mx-auto flex justify-between w-full p-4 lg:px-12 lg:py-4 max-w-7xl  z-50 items-center border-b-4";
	return (
		<>
			<div className='h-24 lg:h-28'></div>
			<header className={headerClasses}>
				<div className='flex justify-center items-center gap-4'>
					<BurgerMenu onClick={showMobileNavHandler } mobileNavIsActive={mobileNavIsActive} />
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
					<div>
						<button>
							<img src={cartIcon} alt='Cart' />
						</button>
					</div>
					<div className=' full w-max'>
						<button className='py-1 px-3'>
							<img
								src={avatar}
								className='w-10 lg:w-14 border-solid border-transparent border-2 rounded-full hover:border-orange-400 hover:border-[3px] transition'
								alt='User Profile'
							/>
						</button>
					</div>
				</div>
			</header>
		</>
	);
}
