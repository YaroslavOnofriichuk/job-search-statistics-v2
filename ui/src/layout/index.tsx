import { ReactNode, useLayoutEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme as stylesTheme } from "./theme";
import { Header } from "./Header";
import { Main } from "./Main";
import { useThemeStore } from "../hooks";

export const Layout = ({ children }: { children: ReactNode}) => {
    const theme = useThemeStore(({theme}) => theme);

    useLayoutEffect(() => {
        const theme = localStorage.getItem("theme") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        useThemeStore.setState({ theme })
    }, [])

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
