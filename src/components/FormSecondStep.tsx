import Input from "antd/lib/input/Input";
import React from "react";
import { PASSWORD, USER_NAME } from "../utils/helpers";

interface Props {
  valueUserName: string;
  valuePassword: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  errorUserName: string;
  errorPassword: string;
  disabled: boolean;
  apiError: string;
  handleGoBack: () => void;
}

const FormSecondStep: React.FC<Props> = ({
  valueUserName,
  valuePassword,
  onChange,
  onBlur,
  errorUserName,
  errorPassword,
  disabled,
  apiError,
  handleGoBack,
}: Props): JSX.Element => {
  return (
    <div>
      <h2>Second Step!</h2>
      <div className="input-wrapper">
        <label htmlFor={USER_NAME}>Your user name</label>
        <Input
          type="text"
          placeholder="User name"
          name={USER_NAME}
          value={valueUserName}
          onChange={onChange}
          onBlur={onBlur}
          size="large"
          allowClear
        />
        {errorUserName && <span className="error">{errorUserName}</span>}
      </div>
      <div className="input-wrapper">
        <label htmlFor={PASSWORD}>Your password</label>
        <Input
          type="password"
          placeholder="Password"
          name={PASSWORD}
          value={valuePassword}
          onChange={onChange}
          onBlur={onBlur}
          allowClear
          size="large"
        />
        {(errorPassword || apiError) && (
          <span className="error">{errorPassword || apiError}</span>
        )}
      </div>
      <div className="btns-wrapper">
        <button className="secondary" onClick={handleGoBack}>
          Go back
        </button>
        <button disabled={disabled} type="submit">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default FormSecondStep;
