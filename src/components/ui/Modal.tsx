import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
	const modalRoot = document.getElementById("modal")!;
	return createPortal(
		<>
			<div
				className='fixed bg-black opacity-75 top-0 left-0 w-screen-small h-screen-small lg:h-screen-large lg:w-screen-large z-[80]'
				onClick={onClose}></div>

			<section className='flex items-center justify-center h-full absolute w-full'>
				{children}
			</section>
		</>,
		modalRoot
	);
}
