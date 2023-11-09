import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme as stylesTheme } from "./theme";
import { Header } from "./Header";
import { Main } from "./Main";
import type { Theme } from "../types";

export const Layout = ({ children }: { children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(() =>
        localStorage.getItem("theme") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (evt: MediaQueryListEvent) => {
            setTheme(evt.matches ? "dark" : "light");
        };
        mq.addEventListener("change", handler);

        return () => mq.removeEventListener("change", handler);
    }, []);

    const handleChangeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        localStorage.setItem("theme", theme);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={stylesTheme[theme]}>
            <GlobalStyle />
            <Header open={open} />
            <Main open={open} onOpen={handleOpen} onChangeTheme={handleChangeTheme} >
                {children}
            </Main>
        </ThemeProvider>
    );
};
