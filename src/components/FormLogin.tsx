import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../api";
import { StyledFormPage } from "../App.styled";
import { AUTH_USER_URL, isBetween, TOKEN } from "../utils/helpers";
import FormFirstStep from "./FormFirstStep";
import FormSecondStep from "./FormSecondStep";

interface Props {}

export const FormLogin: React.FC<Props> = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    api: "",
    email: "",
    userName: "",
    password: "",
  });
  const [isSecondStep, setIsSecondStep] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch(loginApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      let apiResponse: any;
      apiResponse = await response.json();
      if (isBetween(response.status, 200, 300)) {
        sessionStorage.setItem(TOKEN, apiResponse.token);
        navigate(AUTH_USER_URL);
      } else {
        setErrors({ ...errors, api: apiResponse });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    if (value.length === 0) {
      setErrors({
        ...errors,
        [name]: "This field cannot be empty",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
        api: "",
      });
    }
  };

  const handleNextClick = (): void => {
    if (userData.email.length > 0) {
      setIsSecondStep(true);
    } else {
      setErrors({
        ...errors,
        email: "This field cannot be empty",
      });
    }
  };

  const handleGoBack = (): void => {
    setIsSecondStep(false);
  };

  return (
    <StyledFormPage>
      <form onSubmit={handleSubmit}>
        {isSecondStep ? (
          <FormSecondStep
            valueUserName={userData.userName}
            valuePassword={userData.password}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            errorUserName={errors.userName}
            errorPassword={errors.password}
            disabled={
              userData.userName.length === 0 || userData.password.length === 0
            }
            apiError={errors.api}
            handleGoBack={handleGoBack}
          />
        ) : (
          <FormFirstStep
            disabled={userData.email.length === 0}
            value={userData.email}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            error={errors.email}
            handleNextClick={handleNextClick}
          />
        )}
      </form>
    </StyledFormPage>
  );
};
