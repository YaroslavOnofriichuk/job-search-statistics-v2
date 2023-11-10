import { Button } from "./Burger";
import { useHeaderStore } from "../../../hooks";

export const Burger = () => {
    const open = useHeaderStore(({open}) => open);

    const handleClick = () => {
        useHeaderStore.setState({ open: !open })
    };

    return <Button type="button" onClick={handleClick} className={`toggle ${open ? "active" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
    </Button>
};