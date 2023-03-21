import styled, { css } from "styled-components";
import { alignSet, arraySet } from "../../../Utils/style";
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
        columnArea,
        rowArea,
    }: Todo) => css`
        display: flex;
        gap: ${arraySet(gap)};
        flex-direction: ${column ? "column" : "row"};
        justify-content: ${alignSet(column ? valign : align)};
        align-items: ${alignSet(column ? align : valign)};
        ${fill ? "flex:1;" : ""}
        padding: ${arraySet(padding)};
        margin: ${arraySet(margin)};
        grid-column: ${columnArea || ""};
        grid-row: ${rowArea || ""};
    `}
`;
