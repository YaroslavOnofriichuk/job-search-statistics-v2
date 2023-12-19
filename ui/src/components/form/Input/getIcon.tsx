import { ReactNode } from "react";
import { VisibleIcon, UnVisibleIcon, EmailIcon, SearchIcon } from "../../icons";

export const getIcon = (type: string): ReactNode => {
    switch (type) {
        case "password":
            return <UnVisibleIcon />;
        case "text":
            return <VisibleIcon />;
        case "search":
            return <SearchIcon />;
        case "email":
            return <EmailIcon />;
        default:
            return <div></div>
     }
};