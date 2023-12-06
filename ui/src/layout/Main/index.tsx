import { ReactNode, Suspense } from "react";
import type { LayoutType } from "../../types";
import { Main as Wrapper } from "./Main";
import { Burger } from "./Burger";
import { Settings } from "./Settings";
import { useHeaderStore } from "../../hooks";

interface Props {
    children: ReactNode;
    layoutType: LayoutType;
}

export const Main = ({ children, layoutType }: Props) => {
    const open = useHeaderStore(({open}) => open);

    return (
        <Wrapper open={open} $layoutType={layoutType} >
            <section className="head">
                {layoutType === "dashboard" && <Burger />}
                
                <Suspense fallback={null}>
                    <Settings />
                </Suspense>
            </section>

            <section className="content">{children}</section>
        </Wrapper>
    );
};
