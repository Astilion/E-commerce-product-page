import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
}

export default function Wrapper({children}: WrapperProps) {
	return <main className='max-w-7xl mx-auto'>
        {children}
    </main>;
}
