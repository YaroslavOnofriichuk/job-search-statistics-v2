import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { List } from "./List";
import { SettingIcon } from "../../../components/icons";
import { Modal } from "../../../components/Modal";
import { ArrowRightIcon } from "../../../components/icons";
import type { Language } from "../../../types";

export const Settings = () => {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation("components/settings");

    const handleChangeLanguage = (newlang: Language) => {
        i18n.changeLanguage(newlang);
        localStorage.setItem("lng", newlang);
    };

    return (
        <>
            <Button
                type="button"
                onClick={() => setOpen(!open)}
                className={open ? "active" : ""}
            >
                <SettingIcon size="32px" />
            </Button>

            <Modal
                open={open}
                title={t("title")}
                onClose={() => setOpen(false)}
            >
                <List>
                    <li>
                        <p>{t("theme")}</p>
                    </li>

                    <li>
                        <p>{t("language")}</p>
                        <button
                            className="language-button"
                            type="button"
                            onClick={() =>
                                handleChangeLanguage(
                                    i18n.language === "ukr" ? "eng" : "ukr"
                                )
                            }
                        >
                            <p>{i18n.language === "ukr" ? "Українська" : "English"}</p>
                            <ArrowRightIcon size="20px" />
                        </button>
                    </li>
                </List>
            </Modal>
        </>
    );
};
