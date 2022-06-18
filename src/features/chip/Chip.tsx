import React, { FC, useMemo } from "react";
import { HEX } from "../../types/Color";
import { getContrastingShade } from "../../util/ColorUtil";
import './Chip.css'

interface ChipProps {
    enabled: boolean;
    name: string;
    color: HEX;
    onClick: () => void;
}

const Chip: FC<ChipProps> = ({ enabled, name, color, onClick }) => {
    const shadedColor = useMemo<string>(() => getContrastingShade(color), [color])

    return (
        <div 
            onClick={ onClick } 
            className={ "chip noselect " + (enabled ? "chip_active" : "") } 
            style={enabled ? { backgroundColor: color, color: shadedColor } : {}}
        >
            <p>{ name }</p>
            { enabled && <span className="material-symbols-rounded chip__checkmark">done</span> }
        </div>
    )
}

export default Chip