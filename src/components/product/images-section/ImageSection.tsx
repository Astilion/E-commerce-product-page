import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useState } from "react";

import NextButton from "./buttons/NextButton";
import PrevButton from "./buttons/PrevButton";
import ThumbnailList from "./ThumbnailList";
import ImageSlider from "./ImageSlider";
import productImg1 from "../../../assets/image-product-1.jpg";
import productImg2 from "../../../assets/image-product-2.jpg";
import productImg3 from "../../../assets/image-product-3.jpg";
import productImg4 from "../../../assets/image-product-4.jpg";
import thumbnailImg1 from "../../../assets/image-product-1-thumbnail.jpg";
import thumbnailImg2 from "../../../assets/image-product-2-thumbnail.jpg";
import thumbnailImg3 from "../../../assets/image-product-3-thumbnail.jpg";
import thumbnailImg4 from "../../../assets/image-product-4-thumbnail.jpg";
import GalleryPopup from "./GalleryPopup";

const IMAGES = [productImg1, productImg2, productImg3, productImg4];
export const THUMBNAILS = [
	thumbnailImg1,
	thumbnailImg2,
	thumbnailImg3,
	thumbnailImg4,
];
export default function ImageSection() {
	const isMobile = useSelector((state: RootState) => state.deviceType.isMobile);

	const [imageIndex, setImageIndex] = useState(0);
	const [popupIsVisible, setPopupVisible] = useState(false);

	const nextImageHandler = () => {
		setImageIndex(prevIndex =>
			prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevImageHandler = () => {
		setImageIndex(prevIndex =>
			prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1
		);
	};
	const changeImageHandler = (index: number) => {
		setImageIndex(index);
	};

	const hidePopupHandler = () => {
		setPopupVisible(false);
	};
	const showPopupHandler = () => {
		!isMobile && setPopupVisible(true);
	};
	return (
		<section>
			{!isMobile && popupIsVisible && (
				<GalleryPopup
					images={IMAGES}
					prevImageHandler={prevImageHandler}
					nextImageHandler={nextImageHandler}
					currentIndex={imageIndex}
					onClose={hidePopupHandler}
				/>
			)}
			<button aria-label='Show product carousel' onClick={showPopupHandler}>
				<div className='w-full relative overflow-hidden lg:rounded-2xl '>
					{isMobile && (
						<>
							<PrevButton onClick={prevImageHandler} />
							<NextButton onClick={nextImageHandler} />
						</>
					)}
					<ImageSlider images={IMAGES} currentIndex={imageIndex} />
				</div>
			</button>
			{!isMobile && (
				<ThumbnailList
					thumbnails={THUMBNAILS}
					onThumbnailClick={changeImageHandler}
					activeIndex={imageIndex}
				/>
			)}
		</section>
	);
}
