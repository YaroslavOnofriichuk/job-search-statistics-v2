import { useTranslation } from "react-i18next";
import { useThemeStore } from "../../hooks";
import { Switch } from "./Switch";
import { SunIcon, MoonIcon } from "../icons";

export const ThemeSwitch = () => {
    const { theme, changeTheme } = useThemeStore();
    const { t } = useTranslation("components/theme-switch");

    const handleClick = () => {
        changeTheme(theme === "dark" ? "light" : "dark");
    };

    return <Switch $isDark={theme === "dark"} onClick={handleClick}>
        <div className="theme-switch-controls">
            <div className="theme-switch-control light">
                <SunIcon />
                <p>{t("light")}</p>
            </div>

            <div className="theme-switch-control dark">
                <MoonIcon />
                <p>{t("dark")}</p>
            </div>
        </div>
    </Switch>
};