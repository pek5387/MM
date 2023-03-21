import { Display } from "../../../Model/Interface";

export interface Todo extends Display {
    column?: boolean;
    fill?: boolean;
    wrap?: boolean;
}
