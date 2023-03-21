import styled from "styled-components";
import { alignSet, arraySet, gridPositionSet } from "../../../Utils/style";
import { Todo } from "./interface";

const gridSet = (target?: any) => {
    const type = typeof target;
    const isArray = Array.isArray(target);
    let style = "";
    isArray
        ? target.map((i) => {
              return (style += typeof i === "number" ? i + "fr " : i + " ");
          })
        : (style += type === "number" ? `repeat(${target},1fr)` : target);
    return style;
};

export const Wrapper = styled.div`
    ${({
        padding,
        gap,
        margin,
        column,
        row,
        align,
        valign,
        columnStart,
        columnEnd,
        rowStart,
        rowEnd,
    }: Todo) => `
    display: grid;
    grid-template-rows: ${gridSet(row)};
    grid-template-columns: ${gridSet(column)};
    padding:${arraySet(padding)};
    margin:${arraySet(margin)};
    gap:${arraySet(gap)};
    justify-content:${alignSet(align)};
    align-items:${alignSet(valign)};
    grid-column: ${gridPositionSet(columnStart, columnEnd)};
    grid-row: ${gridPositionSet(rowStart, rowEnd)};
`}
`;
