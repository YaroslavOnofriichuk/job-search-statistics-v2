import { ComponentType } from "react";
import { Link as NavLink } from "./Link";
import { IconProps } from "../../../components/icons";

export const Link = ({ path, icon: Icon }: { path: string; icon: ComponentType<IconProps> }) => (
    <NavLink
        to={path}
        className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
        }
    >
        <Icon />
        <p>{path}</p>
    </NavLink>
);
