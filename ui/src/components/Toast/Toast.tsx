import styled, { keyframes } from "styled-components";

const fadein = keyframes`
 from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
`;

const expand = keyframes`
  from {min-width: 50px}
    to {min-width: 400px}
`;

const stay = keyframes`
   from {min-width: 400px}
    to {min-width: 400px}
`;

const shrink = keyframes`
   from {min-width: 400px;} 
    to {min-width: 50px;}
`;

const fadeout = keyframes`
   from {bottom: 30px; opacity: 1;}
    to {bottom: 60px; opacity: 0;}
`;

interface ToastProps {
    $status: "error" | "success";
}

export const Toast = styled.div<ToastProps>`
    color: ${({ theme }) => theme.colors.text.primary};
    visibility: hidden;
    max-width: 50px;
    height: 50px;
    margin: auto;
    text-align: center;
    border-radius: 2px;

    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 30px;
    font-size: 17px;
    white-space: nowrap;

    /* show */
    visibility: visible;
    -webkit-animation: ${fadein} 0.5s, ${expand} 0.5s 0.5s, ${stay} 3s 1s,
        ${shrink} 0.5s 2s, ${fadeout} 0.5s 2.5s;
    animation: ${fadein} 0.5s, ${expand} 0.5s 0.5s, ${stay} 3s 1s,
        ${shrink} 0.5s 4s, ${fadeout} 0.5s 4.5s;

    .img {
        height: 50px;

        float: left;

        padding: 16px;

        box-sizing: border-box;

        color: ${({ theme }) => theme.colors.text.primary};
        background-color: ${({ theme, $status }) =>
            $status === "success"
                ? theme.colors.text.success
                : theme.colors.text.error};
    }

    .desc {
        color: ${({ theme }) => theme.colors.text.primary};
        background-color: ${({ theme }) => theme.colors.body.primary};
        height: 50px;
        padding: 16px;

        overflow: hidden;
        white-space: nowrap;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${({ theme, $status }) =>
                $status === "success"
                    ? theme.colors.text.success
                    : theme.colors.text.error};
            opacity: ${({ theme }) =>
                theme.mode === "light" ? "0.2" : "0.6"};
        }
    }
`;
