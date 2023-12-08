import { Button } from "./Button";

interface ButtonProps {
    to: string,
    label: string,
}

export const ButtonLink = (props: ButtonProps) => {
    //@ts-ignore
    return <Button to={props.to.toLowerCase() === "back" ? -1 : props.to}>
        {props.label}
    </Button>
};