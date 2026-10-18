import { useEffect } from "react";
import Modal from "../../ui/Modal";
import SliderButton from "./SliderButton";
import ImageSlider from "./ImageSlider";
import ThumbnailList from "./ThumbnailList";
import CloseIcon from "../../ui/icons/CloseIcon";

interface GalleryLightboxProps {
	images: string[];
	thumbnails: string[];
	currentIndex: number;
	onPrev: () => void;
	onNext: () => void;
	onThumbnailClick: (index: number) => void;
	onClose: () => void;
}

export default function GalleryLightbox({
	images,
	thumbnails,
	currentIndex,
	onPrev,
	onNext,
	onThumbnailClick,
	onClose,
}: GalleryLightboxProps) {
	useEffect(() => {
		const keyDownHandler = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") onPrev();
			if (event.key === "ArrowRight") onNext();
		};
		document.addEventListener("keydown", keyDownHandler);
		return () => document.removeEventListener("keydown", keyDownHandler);
	}, [onPrev, onNext]);

	return (
		<Modal onClose={onClose}>
			<div className='flex w-full justify-center items-center lg:rounded-2xl z-[90]'>
				<div className='absolute flex w-[60%] xl:w-[40%] 2xl:w-[33%]'>
					<SliderButton direction='prev' onClick={onPrev} />
					<SliderButton direction='next' onClick={onNext} />
				</div>
				<div className='relative flex w-[60%] xl:w-[40%] 2xl:w-[33%] '>
					<button
						onClick={onClose}
						aria-label='Close gallery'
						className='absolute -top-12 right-1 z-[90]  p-4'>
						<CloseIcon iconColor={"white"} />
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
					activeIndex={currentIndex}
				/>
			</div>
		</Modal>
	);
}
