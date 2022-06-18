import React, { FC, ReactElement } from "react";
import { RadioButtonFull, RadioButtonProps } from "./RadioButton";
import "./RadioGroup.css";

interface RadioGroupProps {
  groupName: string;
  className?: string;
  onSelected: (value: any) => void;
  children: ReactElement<RadioButtonProps> | ReactElement<RadioButtonProps>[];
}

const RadioGroup: FC<RadioGroupProps> = ({ groupName, children, onSelected, className }) => {
  return (
    <div className={"radio-group " + (className ? className : "")}>
      {Array.isArray(children) ? (
        children.map((elem, ind) => (
          <RadioButtonFull
            checked={elem.props.checked}
            onSelected={onSelected}
            key={ind}
            id={groupName + ind}
            groupName={groupName}
            label={elem.props.label}
            value={elem.props.value}
          />
        ))
      ) : (
        <RadioButtonFull
          checked={children.props.checked}
          onSelected={onSelected}
          groupName={groupName}
          label={children.props.label}
          value={children.props.value}
          id={groupName + 0}
        />
      )}
    </div>
  );
};

export default RadioGroup;
