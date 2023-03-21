import { StyleDefaultProps } from "../../../Model/Interface";

export interface Todo extends StyleDefaultProps {
    name?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
