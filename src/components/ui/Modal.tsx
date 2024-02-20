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
				className='bg-black opacity-75 top-0 left-0 w-screen-small lg:w-screen-large z-50'
				onClick={onClose}></div>

			<section className='flex items-center justify-center'>{children}</section>
		</>,
		modalRoot
	);
}
