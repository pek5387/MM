import { Display } from "../../../Interface";

export interface Todo extends Display {
    column?: Array<number | string> | number;
    row?: Array<number | string> | number;
}
