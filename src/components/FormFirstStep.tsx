import Input from "antd/lib/input/Input";
import React from "react";
import { EMAIL } from "../utils/helpers";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  error: string;
  handleNextClick: () => void;
  disabled: boolean;
}

const FormFirstStep: React.FC<Props> = ({
  value,
  onChange,
  onBlur,
  error,
  handleNextClick,
  disabled,
}: Props): JSX.Element => {
  return (
    <div>
      <h2>First Step!</h2>
      <div className="input-wrapper">
        <label htmlFor={EMAIL}>Your email</label>
        <Input
          type="text"
          placeholder="Email"
          name={EMAIL}
          allowClear
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          size="large"
        />
        {error && <span className="error">{error}</span>}
      </div>
      <button onClick={handleNextClick} disabled={disabled}>
        next
      </button>
    </div>
  );
};

export default FormFirstStep;
