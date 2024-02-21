import previousIcon from "../../../../assets/icon-previous.svg";

interface PrevButtonProps {
	onClick: () => void;
}
export default function PrevButton({ onClick }: PrevButtonProps) {
	return (
		<button
			onClick={onClick}
			className='bg-white rounded-[100%] absolute top-1/2 transform -translate-y-1/2 p-4 left-4 lg:-left-6  hover:bg-orange-500 focus:bg-orange-500 duration-150 z-20'
			aria-label='Show Previous Image'>
			<img className='h-4 w-4' src={previousIcon} alt='Previous Button' />
		</button>
	);
}
