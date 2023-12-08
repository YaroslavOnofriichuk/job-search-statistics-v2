import { create } from "zustand";

interface HeaderState {
    open: boolean,
    toggle: () => void,
}

export const useHeaderStore = create<HeaderState>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}))