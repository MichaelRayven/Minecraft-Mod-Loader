import React, { FC, useContext } from "react";
import { DropdownContext } from "./Dropdown";
import './Dropdown.css'

export interface DropdownItemProps {
    value: any;
    label: string;
    id: any;
}

const DropdownItem: FC<DropdownItemProps> = ({ label, value, id }) => {
    const { onClick, selected } = useContext(DropdownContext)

    return (
        <p 
            onClick={() => onClick(id, value)} 
            className={"dropdown__item " + (selected === id ? "dropdown__item_selected" : "")}
        >{ label }</p>
    )
}

export default DropdownItem