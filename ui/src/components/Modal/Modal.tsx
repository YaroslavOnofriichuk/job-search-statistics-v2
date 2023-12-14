import styled from 'styled-components';

interface ModalProps {
    open: boolean;
}

export const Window = styled.div<ModalProps>`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: ${props => (props.open ? 1 : 0)};
    visibility: ${props => (props.open ? "visible" : "hidden")};
    pointer-events: ${props => (props.open ? "auto" : "none")};;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
        visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);

    .modal-main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .modal-head {
        width: 100%;
        min-width: 300px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-top-left-radius: 38px;
        border-top-right-radius: 38px;
        border: 1px solid ${(props) => props.theme.colors.body.primary}; 
        background-color: ${(props) => props.theme.colors.body.secondary};
        font-weight: 500;
        color: ${(props) => props.theme.colors.text.primary};

        button {
            position: absolute;
            top: 20px;
            left: 25px;
        }
    }

    .modal-content {
        width: 100%;
        background-color: ${(props) => props.theme.colors.body.secondary};
        padding: 0 35px 35px 35px;
        overflow: hidden;
        border-bottom-left-radius: 38px;
        border-bottom-right-radius: 38px;
        border: 1px solid ${(props) => props.theme.colors.body.primary}; 
    }
`;
