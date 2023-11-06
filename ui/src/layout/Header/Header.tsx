import styled from 'styled-components';

export const Header = styled.header`
  background-color: #2c3e50;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  z-index: 1000;

  a {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .active svg {
    fill: #3498db;
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 400px;

    @media (min-width: 767px) {
      flex-direction: column;
      height: 500px;
      width: 100px;
    }
  }

  @media (min-width: 767px) {
    flex-direction: column;
    width: 100px;
    min-height: 100vh;
  }
`;