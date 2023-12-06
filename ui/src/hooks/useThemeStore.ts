import { create } from "zustand";
import type { Theme } from "../types";

interface ThemeState {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

const defaultTheme = (): Theme => {
    const themeFromLocalStorage = localStorage.getItem("theme");
    const browserTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    //@ts-ignore
    return themeFromLocalStorage ? themeFromLocalStorage : browserTheme;
};

export const useThemeStore = create<ThemeState>((set) => ({
    theme: defaultTheme(),
    changeTheme: (theme: Theme) => set(() => ({ theme })),
}));
