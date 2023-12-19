import { ComponentType } from "react";
import { Link as NavLink } from "./Link";
import { IconProps } from "../../../components/icons";
import { useHeaderStore } from "../../../hooks";
import { useTranslation } from "react-i18next";

interface LinkProps {
    path: string,
    title: string,
    icon: ComponentType<IconProps>,
}

export const Link = ({ path, icon: Icon, title }: LinkProps) => {
    const open = useHeaderStore(({open}) => open);
    const { t } = useTranslation("components/nav");

    return <NavLink
        to={path}
        className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
        }
    >
        <Icon />
        {open && <p>{t(title)}</p>}
    </NavLink>
};
