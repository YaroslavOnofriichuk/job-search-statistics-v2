import { ReactNode } from "react";
import { Window } from "./Modal";
import { CloseButton } from "../CloseButton";
import { useOutsideClick } from "../../hooks";

interface ModalProps {
    title: string,
    open: boolean,
    onClose: () => void,
    children: ReactNode,
}

export const Modal = (props: ModalProps) => {
    const ref = useOutsideClick<HTMLDivElement>(props.onClose);
    
    return <Window open={props.open}>
        <div className="modal-main" ref={ref} >
            <div className="modal-head">
                <CloseButton onClick={props.onClose} />
                <p>{props.title}</p>
            </div>

            <div className="modal-content">
                {props.children}
            </div>
        </div>
    </Window>
};