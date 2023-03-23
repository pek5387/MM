import { alignSet, arrayStyleSet } from "Common/Utils/style";
import styled from "styled-components";
import { Todo } from "./model";

export const Wrapper = styled.div`
    ${({ theme: { unit } }) => unit}
    ${({ gap, column, align, valign, wrap }: Todo) => `
        flex-wrap:${wrap ? "wrap" : "nowrap"}
        gap: ${arrayStyleSet(gap)};
        flex-direction: ${column ? "column" : "row"};
        justify-content: ${alignSet(column ? valign : align)};
        align-items: ${alignSet(column ? align : valign)};
    `}
`;
