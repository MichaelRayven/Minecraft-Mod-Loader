import React, { FC, useState, ReactElement } from "react";
import './Dropdown.css'
import { DropdownItemProps } from "./DropdownItem";

interface DropdownSettings {
    onClick: (id: number, value: any) => void;
    selected?: any;
}

export const DropdownContext = React.createContext<DropdownSettings>({
    onClick: (id: any, value: any) => {}
})

type Props = {
    placeholder?: string;
    onChange: (value: any) => void;
    className?: string;
    defaultId?: any;
    children?: React.ReactNode;
}

const Dropdown: FC<Props> = ({ placeholder, children, defaultId, onChange, className }) => {
    const [expanded, setExpanded] = useState<boolean>(false)
    const [selected, setSelected] = useState<any | undefined>(defaultId)

    const onItemClickHandler = (itemId: any, value: any) => {
        if(selected === itemId) {
            setSelected(undefined)
            onChange(null)
        } else {
            setSelected(itemId)
            onChange(value)
        }
    }

    const dropdownSettings = {
        onClick: onItemClickHandler,
        selected: selected
    }
    
    return (
        <div className="dropdown">
            <div className={"dropdown__inner noselect " + (className ? className : "")} onClick={() => setExpanded(!expanded)}>
            <p className="dropdown__placeholder">{ placeholder || "Select..." }</p>
                { expanded ? 
                <span className="dropdown__icon material-symbols-rounded">
                    expand_less
                </span>:
                <span className="dropdown__icon material-symbols-rounded">
                    expand_more
                </span> }
            </div>
            <DropdownContext.Provider value={dropdownSettings}>
                <div className={"dropdown__wrapper " + (expanded ? "dropdown__wrapper_expanded" : "")}>
                    { children }
                </div>
            </DropdownContext.Provider>
        </div>
    )
} 

export default Dropdown

// { Array.isArray(children) ?
//     children.map((item, ind) => {
//         return <DropdownItemImpl 
//             key={ind}
//             itemId={ind}
//             value={item.props.value} 
//             label={item.props.label} 
//             selected={ind === selected}
//             onClick={onItemClickHandler}
//         />
//     }) :
//     <DropdownItemImpl
//         itemId={0}
//         value={children.props.value} 
//         label={children.props.label} 
//         selected={0 === selected}
//         onClick={onItemClickHandler}
//     />
// }