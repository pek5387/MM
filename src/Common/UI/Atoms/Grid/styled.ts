import styled from "styled-components";
import { alignSet, arrayStyleSet } from "Common/Utils/style";
import { Todo } from "./model";

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
    ${({ theme: { unit } }) => unit}
    ${({ gap, column, row, align, valign }: Todo) => `
        display: grid;
        grid-template-rows: ${gridSet(row)};
        grid-template-columns: ${gridSet(column)};
        gap: ${arrayStyleSet(gap)};
        justify-content: ${alignSet(align)};
        align-items: ${alignSet(valign)};
    `}
`;
