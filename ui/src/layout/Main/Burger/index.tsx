import { Button } from "./Burger";
import { useHeaderStore } from "../../../hooks";

export const Burger = () => {
    const { open, toggle } = useHeaderStore();

    return <Button type="button" onClick={toggle} className={`toggle ${open ? "active" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
    </Button>
};