import { Button } from "./Button";

export const CloseButton = ({ onClick }: { onClick: () => void }) => {
    return <Button onClick={onClick}>
        <div className="leftright"></div>
        <div className="rightleft"></div>
    </Button>
};