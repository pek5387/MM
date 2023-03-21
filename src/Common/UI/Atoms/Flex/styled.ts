import styled, { css } from "styled-components";
import { alignSet, arraySet, gridPositionSet } from "../../../Utils/style";
import { Todo } from "./interface";

export const Wrapper = styled.div`
    ${({
        padding,
        gap,
        margin,
        column,
        fill,
        align,
        valign,
        rowStart,
        rowEnd,
        columnStart,
        columnEnd,
    }: Todo) => css`
        display: flex;
        padding: ${arraySet(padding)};
        margin: ${arraySet(margin)};
        gap: ${arraySet(gap)};
        flex-direction: ${column ? "column" : "row"};
        ${fill ? "flex:1;" : ""}
        justify-content:${alignSet(column ? valign : align)};
        align-items: ${alignSet(column ? align : valign)};
        grid-column: ${gridPositionSet(columnStart, columnEnd)};
        grid-row: ${gridPositionSet(columnStart, columnEnd)};
    `}
`;
