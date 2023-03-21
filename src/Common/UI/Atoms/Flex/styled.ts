import styled from "styled-components";
import { alignSet, arraySet } from "../../../Utils/style";
import { Todo } from "./interface";

export const Wrapper = styled.div`
    ${({ gap, column, fill, align, valign }: Todo) => `
        display: flex;
        gap: ${arraySet(gap)};
        flex-direction: ${column ? "column" : "row"};
        justify-content: ${alignSet(column ? valign : align)};
        align-items: ${alignSet(column ? align : valign)};
    `}
    ${({ theme: { unit } }) => unit}
`;
