import { ReactNode } from "react";
import { Link } from "./Link";

export const TabLink = ({ children, to }: { children: ReactNode, to: string}) => {
    return <Link
        to={to}
        className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
        }
    >{children}</Link>
};
