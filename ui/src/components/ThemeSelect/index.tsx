import { useThemeStore } from "../../hooks";

export const ThemeSelect = () => {
    const theme = useThemeStore(({theme}) => theme);

    const handleClick = () => {
        useThemeStore.setState({ theme: theme === "dark" ? "light" : "dark" })
    };
};