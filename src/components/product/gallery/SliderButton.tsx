import nextIcon from "../../../assets/icon-next.svg";
import previousIcon from "../../../assets/icon-previous.svg";

interface SliderButtonProps {
	direction: "prev" | "next";
	onClick: () => void;
}

export default function SliderButton({ direction, onClick }: SliderButtonProps) {
	const isNext = direction === "next";
	const positionClasses = isNext ? "right-4 lg:-right-6" : "left-4 lg:-left-6";

	return (
		<button
			onClick={onClick}
			className={`bg-white rounded-[100%] absolute top-1/2 transform -translate-y-1/2 p-4 ${positionClasses} hover:bg-orange-500 focus:bg-orange-500 duration-150 z-20`}
			aria-label={isNext ? "Show next image" : "Show previous image"}>
			<img className='h-4 w-4' src={isNext ? nextIcon : previousIcon} alt='' />
		</button>
	);
}
