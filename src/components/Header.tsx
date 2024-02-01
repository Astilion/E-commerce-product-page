import Logo from "./Logo";
import cartIcon from "../assets/icon-cart.svg";
import BurgerMenu from "./BurgerMenu";
import avatar from "../assets/image-avatar.png";
export default function Navigation() {
	return (<>
        <div className="h-24"></div>
		<header className='fixed top-0 flex w-full justify-evenly p-4 max-w-7xl z-50 items-center'>
			<BurgerMenu />
			<Logo />
			<div>
				<nav className="hidden">
					<ul>
						<li>
							<a href='#'>Collections</a>
						</li>
						<li>
							<a href='#'>Men</a>
						</li>
						<li>
							<a href='#'>Women</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<button>
					<img src={cartIcon} alt='Cart' />
				</button>
			</div>
			<div className="w-max">
				<button className="py-1 px-3">
					<img src={avatar} className="w-10 border-solid border-transparent border-2" alt='User Profile' />
				</button>
			</div>
		</header>
        </>
	);
}
