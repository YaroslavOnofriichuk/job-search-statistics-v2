import { Button } from "./Burger";

interface BurgerProps {
    onClick: () => void,
    open: boolean,
}

export const Burger = ({ onClick, open }: BurgerProps ) => {
    return <Button type="button" onClick={onClick} className={`toggle ${open ? "active" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
    </Button>
};