import Modal from "../../ui/Modal";
import NextButton from "./buttons/NextButton";
import ImageSlider from "./ImageSlider";
import PrevButton from "./buttons/PrevButton";

interface GalleryPopupProps {
	onClose: () => void;
	prevImageHandler: () => void;
	nextImageHandler: () => void;
	currentIndex: number;
	images: string[];
}

export default function GalleryPopup({
	onClose,
	prevImageHandler,
	nextImageHandler,
	images,
	currentIndex,
}: GalleryPopupProps) {
	return (
		<Modal onClose={onClose}>
			<div className='flex w-full justify-center items-center overflow-hidden lg:rounded-2xl  z-[90]'>
				<div className=" absolute flex w-[40%]">

				<PrevButton onClick={prevImageHandler} />
				<NextButton onClick={nextImageHandler} />
				</div>
				<div className='relative flex w-[40%] overflow-hidden rounded-2xl'>
					<ImageSlider images={images} currentIndex={currentIndex} />
				</div>
			</div>
		</Modal>
	);
}
