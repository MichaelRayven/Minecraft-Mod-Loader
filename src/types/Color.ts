export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HSL = `hsl(${number}, ${number}%, ${number}%)`;
export type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export default Color