import { useCallback, useSyncExternalStore } from "react";

// Matches Tailwind's `lg` breakpoint
const DESKTOP_QUERY = "(min-width: 1024px)";

export function useMediaQuery(query: string) {
	const subscribe = useCallback(
		(onChange: () => void) => {
			const mediaQueryList = window.matchMedia(query);
			mediaQueryList.addEventListener("change", onChange);
			return () => mediaQueryList.removeEventListener("change", onChange);
		},
		[query]
	);

	return useSyncExternalStore(
		subscribe,
		() => window.matchMedia(query).matches
	);
}

export const useIsMobile = () => !useMediaQuery(DESKTOP_QUERY);
