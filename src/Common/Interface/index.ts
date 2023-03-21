export interface StyleDefaultProps {
    padding?: Array<number | string>;
    margin?: Array<number | string>;
    children?: React.ReactNode;
    className?: string;
    rowArea?: [number, number];
    columnArea?: [number, number];
    rowStart?: number;
    rowEnd?: number;
    columnStart?: number;
    columnEnd?: number;
}

export interface Display extends StyleDefaultProps {
    gap?: Array<number | string>;
    align?: "left" | "center" | "right" | "side";
    valign?: "top" | "middle" | "bottom" | "side";
}
