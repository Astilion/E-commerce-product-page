import { ReactNode } from "react";

interface WrapperProps {
	children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
	return (
		<main className='max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-8  lg:px-20 lg:my-10 md:max-w-[80%]'>
			{children}
		</main>
	);
}
