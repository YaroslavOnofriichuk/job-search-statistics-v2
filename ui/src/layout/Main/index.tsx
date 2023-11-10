import { ReactNode } from "react";
import { Main as Wrapper } from "./Main";
import { Burger } from "./Burger";
import { Settings } from "./Settings";
import { useHeaderStore } from "../../hooks";

export const Main = ({ children }: { children: ReactNode }) => {
    const open = useHeaderStore(({open}) => open);

    return (
        <Wrapper open={open}>
            <section className="head">
                <Burger />

                <Settings />
            </section>

            <section className="content">{children}</section>
        </Wrapper>
    );
};
