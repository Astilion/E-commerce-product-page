const capitalizeFirstLetter = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

export default function NavList() {
	const navNames: string[] = [
		"collections",
		"men",
		"women",
		"about",
		"contact",
	];

	const anchorClasses =
		"lg:pb-[39px] lg:px-2 lg:py-2 lg:border-b-4 lg:hover:border-orange-400 lg:hover:text-black lg:text-slate-700 transition";
	return (
		<ul className='ml-10 lg:flex gap-4'>
			{navNames.map(name => (
				<li>
					<a href='#' className={anchorClasses}>
						{capitalizeFirstLetter(name)}
					</a>
				</li>
			))}
		</ul>
	);
}
