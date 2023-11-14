import { useState, useLayoutEffect, useCallback } from "react";

type HookResponse = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
};

type HookType = () => HookResponse;

const queries = [
    "(max-width: 766px)",
    "(min-width: 767px) and (max-width: 1199px)",
    "(min-width: 1200px)",
];

export const useMatchMedia: HookType = () => {
    const mediaQueryLists: MediaQueryList[] = queries.map((query) =>
        matchMedia(query)
    );

    const getValues = useCallback(
        () => mediaQueryLists.map((list) => list.matches),
        [mediaQueryLists]
    );

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach((list) =>
            list.addEventListener("change", handler)
        );

        return () =>
            mediaQueryLists.forEach((list) =>
                list.removeEventListener("change", handler)
            );
    }, [getValues, mediaQueryLists]);

    return["isMobile", "isTablet", "isDesktop"].reduce<HookResponse>(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        { isMobile: false, isTablet: false, isDesktop: false }
    );
};
