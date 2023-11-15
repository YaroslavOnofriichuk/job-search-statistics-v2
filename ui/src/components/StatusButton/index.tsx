import { useTranslation } from "react-i18next";
import type { NoteStatus } from "../../types";
import { getStatusColor } from "../../helpers";
import { Button } from "./Button";

interface ButtonProps {
    status: NoteStatus | "ALL",
    disabled?: boolean,
    active?: boolean,
    onClick?: () => void,
}

export const StatusButton = (props: ButtonProps) => {
    const { t } = useTranslation("components/status-button");

    return <Button
        type="button"
        onClick={props.onClick}
        disabled={props.disabled}
        aria-checked={props.active}
        color={getStatusColor(props.status)}
    >
        {t(`status.${props.status}`)}
    </Button>
};