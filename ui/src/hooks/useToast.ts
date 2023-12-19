import { create } from "zustand";
import type { ToastProps } from "../types";

interface ToastState {
    toasts: ToastProps[];
    addToast: (toast: ToastProps) => void;
    removeToast: (text: string) => void;
}

export const useToast = create<ToastState>((set) => ({
    toasts: [],
    addToast: (toast: ToastProps) =>
        set((state) => ({ toasts: [...state.toasts, toast] })),
    removeToast: (text: string) =>
        set((state) => ({
            toasts: state.toasts.filter((toast) => toast.text !== text),
        })),
}));
