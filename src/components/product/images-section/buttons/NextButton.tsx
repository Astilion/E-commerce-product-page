import nextIcon from "../../../../assets/icon-next.svg";
interface NextButtonProps {
	onClick: () => void;
}
export default function NextButton({ onClick }: NextButtonProps) {
	return (
		<button
			onClick={onClick}
			className='bg-white rounded-[100%] absolute top-1/2 transform -translate-y-1/2 p-4 right-4 hover:bg-orange-500 focus:bg-orange-500 duration-150 z-20'
			aria-label='Show Next Image'>
			<img className='h-4 w-4' src={nextIcon} alt='Next Button' />
		</button>
	);
}
