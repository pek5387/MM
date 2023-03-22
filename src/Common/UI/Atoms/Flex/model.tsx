import { Display } from "../../../Model/Interface";

export interface Todo extends Display {
    column?: boolean;
    flex?: boolean;
    wrap?: boolean;
}
