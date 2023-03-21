export type Unit =
    | "auto"
    | `${number}px`
    | `${number}em`
    | `${number}rem`
    | `${number}vw`
    | `${number}vh`
    | `${number}vmin`
    | `${number}vmax`
    | `${number}%`;

export interface StyleDefaultProps {
    padding?: Array<number | Unit>;
    margin?: Array<number | Unit>;
    rowArea?: `${number}/${number}`;
    columnArea?: `${number}/${number}`;
    children?: React.ReactNode;
    className?: string;
    // fill: boolean;\
}

export interface Display extends StyleDefaultProps {
    gap?: Array<number | Unit>;
    align?: "left" | "center" | "right" | "side";
    valign?: "top" | "middle" | "bottom" | "side";
}
