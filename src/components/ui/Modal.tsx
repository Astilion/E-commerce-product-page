import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
	const modalRoot = document.getElementById("modal")!;

	useEffect(() => {
		const keyDownHandler = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};
		document.addEventListener("keydown", keyDownHandler);

		// Prevent the page behind the modal from scrolling
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", keyDownHandler);
			document.body.style.overflow = previousOverflow;
		};
	}, [onClose]);

	return createPortal(
		<>
			<div
				className='fixed bg-black opacity-75 top-0 left-0 w-screen-small h-screen-small lg:h-screen-large lg:w-screen-large z-[80]'
				onClick={onClose}></div>

			<section
				role='dialog'
				aria-modal='true'
				aria-label='Product gallery'
				className='flex flex-col items-center justify-center h-full absolute w-full'>
				{children}
			</section>
		</>,
		modalRoot
	);
}
