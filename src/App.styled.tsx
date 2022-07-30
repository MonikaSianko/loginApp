import styled from "styled-components";

interface IStyledProps {
  isUserPage?: string;
}

export const StyledContainer = styled.div`
  text-align: center;
  font-size: calc(10px + 2vmin);
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: #313150;
  background-image: url("https://img.freepik.com/free-vector/organic-shapes-background_23-2148838040.jpg?w=1800&t=st=1659101059~exp=1659101659~hmac=17906a5ac5ab7f752894010af552a3d1c8ad71d37a7d4ab0183af987be84b8e1");
  background-size: cover;
  background-repeat: no-repeat;
  a {
    font-size: 0.6rem;
  }
  .user-page-img {
    width: 600px;
    height: auto;
    padding: 0 20px 150px 20px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    @media (max-width: 670px) {
      padding: 0 10px 80px 10px;
      width: 260px;
    }
  }
  .log-out {
    font-size: 1rem;
    :hover {
      text-decoration: underline;
    }
  }
  button {
    min-width: 150px;
    font-size: 1.2rem;
    padding: 5px 20px;
    border-radius: 25px;
    background: #70d4ca;
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(180, 175, 175, 0.35);
    :hover {
      filter: brightness(105%);
    }
    :disabled {
      background-color: #acacac;
      color: white;
      cursor: not-allowed;
    }
    &.secondary {
      background: white;
      color: #70d4ca;
      margin-right: 20px;
    }
  }
`;

export const StyledFormPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  form {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    min-height: 400px;
    padding: 50px;
    width: 400px;
    @media (max-width: 520px) {
      padding: 20px;
      width: 100%;
    }

    h2 {
      font-size: 2rem;
      text-transform: uppercase;
      margin-bottom: 50px;
    }

    .error {
      font-size: 1rem;
      color: #fa4c1e;
      margin-top: 10px;
      text-align: left;
      width: 100%;
    }
    .input-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 30px;
    }
    label {
      font-size: 1.2rem;
      text-align: left;
      width: 100%;
      margin-bottom: 5px;
      color: #acacac;
    }
    .btns-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
      button {
        min-width: auto;
      }
    }

    .ant-input-affix-wrapper {
      border-radius: 15px;
      &.ant-input-affix-wrapper-focused {
        border-color: #70d4ca;
      }
      :hover {
        border-color: #70d4ca;
      }
    }
  }
`;

export const StyledNavbar = styled.nav<IStyledProps>`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: ${({ isUserPage }): string =>
    isUserPage ? "space-between" : "center"};

  span {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
