import { create } from "zustand";

interface AuthState {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: localStorage.getItem("isLoggedIn")?.toLowerCase() === "true" || false,
    setIsLoggedIn: (isLoggedIn: boolean) => {
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());
        set(() => ({ isLoggedIn }));
    },
}));
