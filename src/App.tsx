import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { FormLogin } from "./components/FormLogin";
import UserPage from "./components/UserPage";
import { AUTH_USER_URL, LOGIN_URL } from "./utils/helpers";
import { StyledContainer, StyledNavbar } from "./App.styled";

interface Props {}

interface IUserData {
  email: string;
  userName: string;
  fullUserName: string;
}

const App: React.FC<Props> = () => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const navigate = useNavigate();

  const handleSetUserDataCallback = (apiUserData: IUserData): void => {
    setUserData(apiUserData);
  };

  const clearUserData = (): void => {
    setUserData({
      email: "",
      userName: "",
      fullUserName: "",
    });
  };

  const handleLogOut = (): void => {
    clearUserData();
    navigate(LOGIN_URL);
  };

  const userFullName = userData?.fullUserName;

  return (
    <StyledContainer className="Container">
      <StyledNavbar isUserPage={userFullName}>
        <span> {userFullName || "Hello Candidate!"}</span>
        {userFullName && (
          <button className="auto-width" onClick={handleLogOut}>
            log out
          </button>
        )}
      </StyledNavbar>

      <Routes>
        <Route path={LOGIN_URL} element={<FormLogin />} />
        <Route
          path={AUTH_USER_URL}
          element={
            <UserPage handleSetUserDataCallback={handleSetUserDataCallback} />
          }
        />
      </Routes>
      <a href="https://www.freepik.com/vectors/organic-shapes">
        background attribution
      </a>
    </StyledContainer>
  );
};

export default App;
