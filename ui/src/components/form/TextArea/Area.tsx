import styled from "styled-components";

interface AreaProps {
    $error?: boolean,
}

export const Area = styled.div<AreaProps>`
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.body.primary};
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.body.primary};
    color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.primary};
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px;
    transition: .5s;

    & button {
        border: none;
        outline: none;
        background: transparent;
        margin-right: 20px;
        width: 36px;
        height: 26px;
    }

    & textarea {
        background: transparent;
        border: none;
        outline: none;
        color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.primary};
        font-family: 'Oswald', sans-serif;
        font-size: 14px;
        transition: .5s;
        resize: none;

        &::placeholder {
            color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.secondary};
        }

        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active{
            -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.body.primary} inset !important;
            -webkit-text-fill-color: ${({ theme }) => theme.colors.text.primary} !important;
        }

    }

    & p {
        font-size: 10px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text.error};
        position: absolute;
        left: 64px;
        bottom: 5px;
    }

    &:hover, &:focus {
        background: ${({ theme }) => theme.colors.body.secondary};
        color: ${({ theme }) => theme.colors.text.secondary};

        & svg {
            fill: ${({ theme }) => theme.colors.text.secondary};
        }

        & textarea {
            color: ${({ theme }) => theme.colors.text.secondary};

            &:-webkit-autofill,
            &:-webkit-autofill:hover, 
            &:-webkit-autofill:focus, 
            &:-webkit-autofill:active{
                -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.body.secondary} inset !important;
                -webkit-text-fill-color: ${({ theme }) => theme.colors.text.primary} !important;
            }
        }
    }
`;
