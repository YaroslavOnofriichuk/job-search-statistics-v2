import styled from 'styled-components';

export const Popup = styled.div`
    position: absolute;
    right: 10px;
    top: 110px;
    z-index: 1001;
    width: 100%;
    max-width: 388px;
    background-color: ${({theme}) => theme.colors.body.secondary};
    font-weight: 500;
    color: ${({theme}) => theme.colors.text.primary};
    border-radius: 38px;
    border: 3px solid ${({theme}) => theme.colors.body.primary};
    overflow: hidden;

    .head {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 3px solid ${({theme}) => theme.colors.body.primary};
    }
`;
