import { ComponentType } from "react";
import { Link as NavLink } from "./Link";
import { IconProps } from "../../../components/icons";

interface LinkProps {
    path: string,
    icon: ComponentType<IconProps>,
    open: boolean,
}

export const Link = ({ path, icon: Icon, open }: LinkProps) => (
    <NavLink
        to={path}
        className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
        }
    >
        <Icon />
        {open && <p>{path}</p>}
    </NavLink>
);
