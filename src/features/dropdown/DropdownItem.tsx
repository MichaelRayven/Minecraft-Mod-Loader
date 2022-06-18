import React, { FC } from "react";
import './Dropdown.css'

export interface DropdownItemProps {
    value: any;
    label: string;
}

export interface DropdownItemImplProps {
    value: any;
    label: string;
    itemId: number;
    onClick: (itemId: number, value: any) => void;
    selected: boolean;
}

const DropdownItem: FC<DropdownItemProps> = ({ label, value }) => {
    return (<p></p>)
}

export const DropdownItemImpl: FC<DropdownItemImplProps> = ({ label, value, selected, onClick, itemId }) => {
    return (
        <p onClick={() => onClick(itemId, value)} className={"dropdown__item " + (selected ? "dropdown__item_selected" : "")}>{ label }</p>
    )
}

export default DropdownItem