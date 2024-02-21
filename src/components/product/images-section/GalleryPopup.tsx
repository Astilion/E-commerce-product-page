import Modal from "../../ui/Modal";
import NextButton from "./buttons/NextButton";
import ImageSlider from "./ImageSlider";
import PrevButton from "./buttons/PrevButton";
import ThumbnailList from "./ThumbnailList";
import CloseIcon from "../../ui/icons/CloseIcon";

interface GalleryPopupProps {
	onClose: () => void;
	prevImageHandler: () => void;
	nextImageHandler: () => void;
	currentIndex: number;
	images: string[];
	thumbnails: string[];
	onThumbnailClick: (index: number) => void;
	activeIndex: number;
}

export default function GalleryPopup({
	onClose,
	prevImageHandler,
	nextImageHandler,
	images,
	currentIndex,
	thumbnails,
	onThumbnailClick,
	activeIndex,
}: GalleryPopupProps) {
	return (
		<Modal onClose={onClose}>
			<div className='flex w-full justify-center items-center lg:rounded-2xl z-[90]'>
				<div className='absolute flex w-[60%] xl:w-[40%] 2xl:w-[30%]'>
					<PrevButton onClick={prevImageHandler} />
					<NextButton onClick={nextImageHandler} />
				</div>
				<div className='relative flex w-[60%] xl:w-[40%] 2xl:w-[30%] '>
					<button onClick={onClose} aria-label="Close Gallery popup icon" className='absolute -top-12 right-1 z-[90]  p-4'>
						<CloseIcon iconColor={'white'}/>
					</button>
					<div className='overflow-hidden rounded-2xl'>
						<ImageSlider images={images} currentIndex={currentIndex} />
					</div>
				</div>
			</div>
			<div className='z-[90] w-1/2 xl:w-[35%] 2xl:w-[25%]'>
				<ThumbnailList
					thumbnails={thumbnails}
					onThumbnailClick={onThumbnailClick}
					activeIndex={activeIndex}
				/>
			</div>
		</Modal>
	);
}
