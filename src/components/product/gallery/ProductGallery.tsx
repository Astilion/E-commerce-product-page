import { useCallback, useState } from "react";
import { useIsMobile } from "../../../hooks/useMediaQuery";

import SliderButton from "./SliderButton";
import ThumbnailList from "./ThumbnailList";
import ImageSlider from "./ImageSlider";
import GalleryLightbox from "./GalleryLightbox";

interface ProductGalleryProps {
	images: string[];
	thumbnails: string[];
}

export default function ProductGallery({
	images,
	thumbnails,
}: ProductGalleryProps) {
	const isMobile = useIsMobile();

	const [imageIndex, setImageIndex] = useState(0);
	const [lightboxIsVisible, setLightboxIsVisible] = useState(false);

	// Stable references, because the lightbox subscribes to keyboard events with them
	const nextImageHandler = useCallback(() => {
		setImageIndex(prevIndex =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	}, [images.length]);

	const prevImageHandler = useCallback(() => {
		setImageIndex(prevIndex =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	}, [images.length]);

	const hideLightboxHandler = useCallback(() => {
		setLightboxIsVisible(false);
	}, []);

	return (
		<section>
			{!isMobile && lightboxIsVisible && (
				<GalleryLightbox
					images={images}
					thumbnails={thumbnails}
					currentIndex={imageIndex}
					onPrev={prevImageHandler}
					onNext={nextImageHandler}
					onThumbnailClick={setImageIndex}
					onClose={hideLightboxHandler}
				/>
			)}
			<div className='w-full relative overflow-hidden md:rounded-2xl'>
				{isMobile ? (
					<>
						<SliderButton direction='prev' onClick={prevImageHandler} />
						<SliderButton direction='next' onClick={nextImageHandler} />
						<ImageSlider images={images} currentIndex={imageIndex} />
					</>
				) : (
					<button
						aria-label='Open product gallery'
						className='block w-full cursor-pointer'
						onClick={() => setLightboxIsVisible(true)}>
						<ImageSlider images={images} currentIndex={imageIndex} />
					</button>
				)}
			</div>
			{!isMobile && (
				<ThumbnailList
					thumbnails={thumbnails}
					onThumbnailClick={setImageIndex}
					activeIndex={imageIndex}
				/>
			)}
		</section>
	);
}
