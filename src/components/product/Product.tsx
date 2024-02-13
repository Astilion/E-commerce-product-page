import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import ProductDetailsSection from "./product-detail-section/ProductDetailsSection";
import productImg1 from "../../assets/image-product-1.jpg";
import productImg2 from "../../assets/image-product-2.jpg";
import productImg3 from "../../assets/image-product-3.jpg";
import productImg4 from "../../assets/image-product-4.jpg";
import thumbnailImg1 from "../../assets/image-product-1-thumbnail.jpg";
import thumbnailImg2 from "../../assets/image-product-2-thumbnail.jpg";
import thumbnailImg3 from "../../assets/image-product-3-thumbnail.jpg";
import thumbnailImg4 from "../../assets/image-product-4-thumbnail.jpg";
import nextIcon from "../../assets/icon-next.svg";
import previousIcon from "../../assets/icon-previous.svg";

import { useState } from "react";

const IMAGES = [productImg1, productImg2, productImg3, productImg4];
export default function Product() {
	const isMobile = useSelector((state: RootState) => state.deviceType.isMobile);

	const [imageIndex, setImageIndex] = useState(0);

	const showNextImage = () => {
		setImageIndex(prevIndex =>
			prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
		);
	};

	const showPrevImage = () => {
		setImageIndex(prevIndex =>
			prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1
		);
	};
	const changeImage = (index: number) => {
		return () => {
			setImageIndex(index);
		};
	};
	return (
		<>
			<section>
				<div className='w-full relative overflow-hidden lg:rounded-2xl'>
					{isMobile && (
						<>
							<button
								onClick={showPrevImage}
								className='bg-white rounded-[100%] absolute top-1/2 transform -translate-y-1/2 p-4 left-4 hover:bg-orange-500 focus:bg-orange-500 duration-150 z-20'
								aria-label='Show Previous Image'>
								<img
									className='h-4 w-4'
									src={previousIcon}
									alt='Previous Button'
								/>
							</button>
							<button
								onClick={showNextImage}
								className='bg-white rounded-[100%] absolute top-1/2 transform -translate-y-1/2 p-4 right-4 hover:bg-orange-500 focus:bg-orange-500 duration-150 z-20'
								aria-label='Show Next Image'>
								<img className='h-4 w-4' src={nextIcon} alt='Next Button' />
							</button>
						</>
					)}

					<div
						className='flex w-full h-full duration-300 ease-in-out'
						style={{ translate: `${-100 * imageIndex}%` }}>
						{IMAGES.map(url => (
							<img src={url} key={url} className='' alt='Current Image' />
						))}
					</div>
				</div>
				{!isMobile && (
					<ul className='flex mt-8 gap-8'>
						<li>
							<button
								onClick={changeImage(0)}
								className='rounded-xl overflow-hidden hover:opacity-60 duration-150'>
								<img src={thumbnailImg1} alt='thumbnail image #1' />
							</button>
						</li>
						<li>
							<button
								onClick={changeImage(1)}
								className='rounded-xl overflow-hidden hover:opacity-60 duration-150'>
								<img src={thumbnailImg2} alt='thumbnail image #2' />
							</button>
						</li>
						<li>
							<button
								onClick={changeImage(2)}
								className='rounded-xl overflow-hidden hover:opacity-60 duration-150'>
								<img src={thumbnailImg3} alt='thumbnail image #3' />
							</button>
						</li>
						<li>
							<button
								onClick={changeImage(3)}
								className='rounded-xl overflow-hidden hover:opacity-60 duration-150'>
								<img src={thumbnailImg4} alt='thumbnail image #4' />
							</button>
						</li>
					</ul>
				)}
			</section>
			<ProductDetailsSection />
		</>
	);
}
