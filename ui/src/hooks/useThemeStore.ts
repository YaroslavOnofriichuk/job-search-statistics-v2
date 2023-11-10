import { create } from "zustand";
import type { Theme } from "../types";

interface ThemeState {
    theme: Theme,
    changeTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  changeTheme: (theme: Theme) => set(() => ({ theme })),
}))