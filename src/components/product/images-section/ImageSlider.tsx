interface ImageSliderProps {
	images: string[];
	currentIndex: number;
}
export default function ImageSlider({
	images,
	currentIndex,
}: ImageSliderProps) {
	return (
		<div
			className='flex w-full h-full duration-300 ease-in-out '
			style={{ transform: `translateX(${-100 * currentIndex}%)` }}>
			{images.map((url, index) => (
				<img src={url} key={index} alt={`image #${index + 1}`} />
			))}
		</div>
	);
}
