import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import type { LayoutType } from "../types";
import { GlobalStyle } from "./GlobalStyle";
import { theme as stylesTheme } from "./theme";
import { Header } from "./Header";
import { Main } from "./Main";
import { useThemeStore } from "../hooks";

interface Props {
    children: ReactNode;
    type?: LayoutType;
}

export const Layout = ({ children, type = "dashboard" }: Props) => {
    const theme = useThemeStore(({theme}) => theme);

    return (
        <ThemeProvider theme={stylesTheme[theme]}>
            <GlobalStyle />
            {type === "dashboard" && <Header />}
            <Main layoutType={type}>
                {children}
            </Main>
        </ThemeProvider>
    );
};
