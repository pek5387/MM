import styled from "styled-components";
import { alignSet, arraySet } from "../../../Utils/style";
import { Todo } from "./model";

export const Wrapper = styled.div`
    ${({ theme: { unit } }) => unit}
    ${({ gap, column, align, valign, wrap }: Todo) => `
        flex-wrap:${wrap ? "wrap" : "nowrap"}
        gap: ${arraySet(gap)};
        flex-direction: ${column ? "column" : "row"};
        justify-content: ${alignSet(column ? valign : align)};
        align-items: ${alignSet(column ? align : valign)};
    `}
`;
