import React, { FC, useState, ReactElement } from "react";
import './Dropdown.css'
import { DropdownItemProps, DropdownItemImpl } from "./DropdownItem";



interface DropdownProps {
    placeholder?: string;
    onChange: (value: any) => void;
    children: ReactElement<DropdownItemProps>[] | ReactElement<DropdownItemProps>;
}

const Dropdown: FC<DropdownProps> = ({ placeholder, children, onChange }) => {
    const [expanded, setExpanded] = useState<boolean>(false)
    const [selected, setSelected] = useState<number | null>(null)

    const onItemClickHandler = (itemId: number, value: any) => {
        if(selected === itemId) {
            setSelected(null)
            onChange(null)
        } else {
            setSelected(itemId)
            onChange(value)
        }
    }

    return (
        <div className="dropdown">
            <div className="dropdown__inner noselect" onClick={() => setExpanded(!expanded)}>
                { selected !== null ? Array.isArray(children) ? 
                    <p className="dropdown__text">{ children[selected].props.label }</p> : 
                    <p className="dropdown__text">{ children.props.label }</p> : 
                    <p className="dropdown__placeholder">{ placeholder || "Select..." }</p>
                }
                { expanded ? 
                <span className="dropdown__icon material-symbols-rounded">
                    expand_less
                </span>:
                <span className="dropdown__icon material-symbols-rounded">
                    expand_more
                </span> }
            </div>
            <div className={"dropdown__wrapper " + (expanded ? "dropdown__wrapper_expanded" : "")}>
                { Array.isArray(children) ?
                    children.map((item, ind) => {
                        return <DropdownItemImpl 
                            key={ind}
                            itemId={ind}
                            value={item.props.value} 
                            label={item.props.label} 
                            selected={ind === selected}
                            onClick={onItemClickHandler}
                        />
                    }) :
                    <DropdownItemImpl
                        itemId={0}
                        value={children.props.value} 
                        label={children.props.label} 
                        selected={0 === selected}
                        onClick={onItemClickHandler}
                    />
                }
            </div>
            
        </div>
    )
} 

export default Dropdown