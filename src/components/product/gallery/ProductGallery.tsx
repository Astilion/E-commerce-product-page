import { useState } from "react";
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

	const nextImageHandler = () => {
		setImageIndex(prevIndex =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevImageHandler = () => {
		setImageIndex(prevIndex =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

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
					onClose={() => setLightboxIsVisible(false)}
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
