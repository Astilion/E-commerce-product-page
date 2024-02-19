interface ThumbnailListProps {
	thumbnails: string[];
	onThumbnailClick: (index: number) => void;
	activeIndex: number;
}
export default function ThumbnailList({
	thumbnails,
	onThumbnailClick,
	activeIndex,
}: ThumbnailListProps) {
	return (
		<ul className='flex mt-8 gap-8'>
			{thumbnails.map((thumbnail, index) => (
				<li key={index}>
					<button
						onClick={() => onThumbnailClick(index)}
						className={`rounded-xl overflow-hidden hover:opacity-60 duration-150 ${
							activeIndex === index ? "opacity-60" : ""
						}`}>
						<img src={thumbnail} alt={`thumbnail image #${index + 1}`} />
					</button>
				</li>
			))}
		</ul>
	);
}
