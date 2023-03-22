import { Unit } from "../Type";

export interface StyleDefaultProps {
    // padding?: Array<Unit>;
    padding?: [Unit, Unit?, Unit?, Unit?];
    margin?: [Unit, Unit?, Unit?, Unit?];
    rowArea?: `${number}/${number}`;
    columnArea?: `${number}/${number}`;
    children?: React.ReactNode;
    className?: string;
    flex?: boolean;
}
export interface Display extends StyleDefaultProps {
    gap?: [Unit, Unit?];
    align?: "left" | "center" | "right" | "side";
    valign?: "top" | "middle" | "bottom" | "side";
}
