import React, { useEffect, useState } from "react";
import { authUserApi } from "../api";
import { isBetween, TOKEN } from "../utils/helpers";
import userPageImg from "../assets/userPageImg.png";

interface Props {
  handleSetUserDataCallback: (apiUserData: IUserData) => void;
}

interface IUserData {
  email: string;
  userName: string;
  fullUserName: string;
}

const UserPage: React.FC<Props> = ({ handleSetUserDataCallback }: Props) => {
  const [errors, setErrors] = useState<string[]>([]);

  const getUserData = async (): Promise<void> => {
    try {
      const token = sessionStorage.getItem(TOKEN);
      const response = await fetch(authUserApi, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });
      let apiResponse: any;
      apiResponse = await response.json();
      if (isBetween(response.status, 200, 300)) {
        handleSetUserDataCallback(apiResponse);
      } else {
        setErrors([...errors, apiResponse]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="UserPage">
        <img
          src={userPageImg}
          alt="user page avatar"
          className="user-page-img"
        />
      </div>
    </>
  );
};

export default UserPage;
