import { ReactNode } from "react";
import { Main as Wrapper } from "./Main";
import { Burger } from "./Burger";
import { Settings } from "./Settings";

interface MainProps {
    children: ReactNode;
    open: boolean;
    onOpen: () => void;
    onChangeTheme: () => void;
}

export const Main = ({ children, open, onOpen, onChangeTheme }: MainProps) => {
    return (
        <Wrapper open={open}>
            <section className="head">
                <Burger onClick={onOpen} open={open} />

                <Settings onChangeTheme={onChangeTheme} />
            </section>

            <section className="content">{children}</section>
        </Wrapper>
    );
};
