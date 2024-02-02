import Logo from "./Logo";
import cartIcon from "../../assets/icon-cart.svg";
import BurgerMenu from "./BurgerMenu";
import avatar from "../../assets/image-avatar.png";
import NavList from "./Navigation/NavList";
export default function Navigation() {
	return (
		<>
			<div className='h-24 lg:h-28'></div>
			<header className='fixed top-0 left-0 right-0 flex justify-between w-full p-4 lg:px-12 lg:py-4 max-w-7xl  z-50 items-center border-b-4'>
				<div className='flex justify-center items-center gap-4'>
					<BurgerMenu />
					<Logo />
					<div>
						<nav className='hidden lg:block'>
							<NavList />
						</nav>
					</div>
				</div>

				<div className='flex justify-center items-center gap-4'>
					<div>
						<button>
							<img src={cartIcon} alt='Cart' />
						</button>
					</div>
					<div className='w-max'>
						<button className='py-1 px-3'>
							<img
								src={avatar}
								className='w-10 lg:w-14 border-solid border-transparent border-2'
								alt='User Profile'
							/>
						</button>
					</div>
				</div>
			</header>
		</>
	);
}
