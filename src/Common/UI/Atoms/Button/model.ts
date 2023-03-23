import { StyleDefaultProps } from "../../../Model/Interface";

export interface Todo extends StyleDefaultProps {
    to?: string;
    onClick?: () => void;
    disabled?: boolean;
}
