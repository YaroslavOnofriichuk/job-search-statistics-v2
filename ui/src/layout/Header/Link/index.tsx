import { ComponentType } from "react";
import { Link as NavLink } from "./Link";
import { IconProps } from "../../../components/icons";
import { useHeaderStore } from "../../../hooks";

interface LinkProps {
    path: string,
    icon: ComponentType<IconProps>,
}

export const Link = ({ path, icon: Icon }: LinkProps) => {
    const open = useHeaderStore(({open}) => open);

    return <NavLink
        to={path}
        className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
        }
    >
        <Icon />
        {open && <p>{path}</p>}
    </NavLink>
};
