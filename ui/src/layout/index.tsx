import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme as stylesTheme } from "./theme";
import { Header } from "./Header";
import { Main } from "./Main";

type Theme = "dark" | "light";

export const Layout = ({ children }: { children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(() =>
        localStorage.getItem("theme") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (evt: MediaQueryListEvent) => {
            setTheme(evt.matches ? "dark" : "light");
        };
        mq.addEventListener("change", handler);

        return () => mq.removeEventListener("change", handler);
    }, []);

    const handleChangeTheme = (theme: Theme) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    };

    return (
        <ThemeProvider theme={stylesTheme[theme]}>
            <GlobalStyle />
            <Header />
            <Main>
                {children}
            </Main>
        </ThemeProvider>
    );
};
