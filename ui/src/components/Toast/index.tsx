import type { ToastProps } from "../../types";
import { Toast as ToastStyled } from "./Toast";
import { useTranslation } from "react-i18next";
import { useToast } from "../../hooks";
import { useEffect } from "react";

export const Toast = ({ status, text }: ToastProps) => {
    const { t } = useTranslation("components/toast");
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(text);
        }, 3000);

        return () => clearTimeout(timer);
    }, [text, removeToast]);

    return <ToastStyled $status={status} >
        <div className="img">
            {status === "success" ? t("success") : t("error")}
        </div>
        <div className="desc">{text}</div>
    </ToastStyled>
};