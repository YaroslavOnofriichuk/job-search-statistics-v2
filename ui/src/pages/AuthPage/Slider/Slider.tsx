import styled from "styled-components";

export const Slider = styled.div`
    background-color: yellow;
    position: relative;
    width: 100%;
    height: 100%;
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
        left: 0;
        top: 0;
        height: 100%;

        background-visibility: hidden;

        transition-timing-function: cubic-bezier(0.25, 0.5, 0.25, 1.25);
        transform: translateZ(0) scale(0.8, 0.8);
        transition-duration: 0.5s;

        text-align: center;
        line-height: 600px;
        font-size: 5rem;
        color: white;

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
        text-align: center;

        & li {
            float: left;
            width: 10px;
            height: 10px;
            border: 1px solid white;
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
                background-color: white;
                transform: scale(2);
                opacity: 1;
            }
        }
    }
`;
