import styled from "styled-components";

export const Slider = styled.div`
    position: relative;
    width: 100%;
    height: 550px;
    overflow: hidden;

    .slider-inner {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;


        transition-timing-function: cubic-bezier(0.22, 1.61, 0.65, 1);
        transition-duration: 1s;
        background-visibility: hidden;
        transition-delay: 0.75s;

        transform: translateZ(0);
    }

    .slide {
        position: absolute;
        top: 0;
        height: 100%;

        background-visibility: hidden;

        transition-timing-function: cubic-bezier(0.25, 0.5, 0.25, 1.25);
        transform: translateZ(0) scale(0.8, 0.8);
        transition-duration: 0.5s;
       
        & div {
            position: absolute;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 20px 20px 70px 20px;
            left: 0;
            bottom: 0;

            & p {
                max-width: 100%;
                color: ${({ theme }) => theme.colors.text.accent};
            }
        }

        &.active {
            transform: scale(1, 1);
            transition-delay: 2s;
        }
    }

    .slider-nav {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        & li {
            float: left;
            width: 10px;
            height: 10px;
            border: 1px solid ${({ theme }) => theme.colors.text.accent};
            z-index: 2;
            display: inline-block;
            margin: 0 10px;
            cursor: pointer;
            border-radius: 50%;
            opacity: 0.5;

            transition-duration: 0.25s;
            background-color: transparent;

            &:hover {
                opacity: 1;
            }

            &.active {
                background-color: ${({ theme }) => theme.colors.text.accent};
                transform: scale(2);
                opacity: 1;
            }
        }
    }

    @media (min-width: 500px) {
        height: 800px;
    }

    @media (min-width: 767px) {
        height: 464px;
    }
`;
