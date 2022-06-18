import React, { FC, useEffect, useRef } from "react";
import "./RadioGroup.css";

export interface RadioButtonProps {
  label: string;
  value: any;
  checked?: boolean;
}

export interface RadioButtonPropsFull {
  label: string;
  groupName: string;
  value: any;
  id: string;
  checked?: boolean;
  onSelected: (value: any) => void;
}

const RadioButton: FC<RadioButtonProps> = ({ label, value, checked }) => {
  return <></>;
};

export const RadioButtonFull: FC<RadioButtonPropsFull> = ({
  label,
  groupName,
  id,
  value,
  onSelected,
  checked
}) => {
  const input = useRef<HTMLInputElement>(null)

  const onChange = () => {
    if(input.current?.checked) {
      onSelected(value)
    }
  }

  useEffect(() => {
    if(checked && input.current != null) {
      input.current.checked = true
    }
  }, [input, checked])

  return (
    <div className="radio-button">
      <input
        ref={input}
        className="radio-button__input"
        type="radio"
        name={groupName}
        id={id}
        onChange={onChange}
      />
      <label className="radio-button__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
