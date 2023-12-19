import { ReactNode, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import type { LayoutType } from "../types";
import { GlobalStyle } from "./GlobalStyle";
import { theme as stylesTheme } from "./theme";
import { Header } from "./Header";
import { Main } from "./Main";
import { useThemeStore, useToast } from "../hooks";
import { Toast } from "../components/Toast";

interface Props {
    children: ReactNode;
    type?: LayoutType;
}

export const Layout = ({ children, type = "dashboard" }: Props) => {
    const theme = useThemeStore(({ theme }) => theme);
    const { toasts } = useToast();

    return (
        <ThemeProvider theme={stylesTheme[theme]}>
            <GlobalStyle />
            {type === "dashboard" && <Header />}
            <Main layoutType={type}>{children}</Main>

            <Suspense fallback={null}>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.text}
                        status={toast.status}
                        text={toast.text}
                    />
                ))}
            </Suspense>
        </ThemeProvider>
    );
};
