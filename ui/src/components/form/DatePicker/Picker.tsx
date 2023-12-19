import styled from "styled-components";

interface PickerProps {
    $error?: boolean,
}

export const Picker = styled.div<PickerProps>`
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.body.primary};
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.body.primary};
    color: ${({ theme, $error }) => $error ? theme.colors.text.error : theme.colors.text.primary};
    position: relative;
    padding: 12px;
    transition: .5s;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    font-feature-settings: "tnum";
	font-weight: 400;

    &:before, &:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2.8em;
		pointer-events: none;
        left: 0;
	}
	&:before {
		top: -.2em;
		background: rgba(0, 0, 0, 0.5);
	}
	&:after {
		bottom: -.2em;
		height: 3em;
		background: rgba(0, 0, 0, 0.5);
	}

    ul {
		max-height: 4em;
		overflow-y: scroll;
		margin-right: .5em;
        margin-left: .5em;
		scroll-snap-type: y mandatory;
		padding-bottom: 3em;
		padding-top: 3em;

        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            display: none;
        }
	}
	li {
		scroll-snap-align: center;
		height: 1.4em;
		text-align: right;
		word-spacing: .2em;
	}

    .picker-window {
        position: absolute;
        height: 1.4em;
        left: 0;
        top: 50%;
        transform: translateY(-65%);
        width: 100%;
        pointer-events: none;
    }

    .picker-triangle {
        content: '';
        background: transparent;
        height: 20px;
        width: 20px;
        position: absolute;
        display: block;
        bottom: -40px;
        left: 50%;
        transform:  translateX(-50%) rotate(45deg);
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
    }
`;
