import { useRef, useEffect } from "react";

export const useOutsideClick = <T>(callback: () => void) => {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            //@ts-ignore
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                callback();
            }
        };

        document.addEventListener("click", handleClick, true);
        document.addEventListener("keydown", handleKeyDown, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
            document.removeEventListener("keydown", handleKeyDown, true);
        };
    }, [callback, ref]);

    return ref;
};