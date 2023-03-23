import { css } from "styled-components";
import { StyleDefaultProps } from "../Model/Interface";
import { arrayStyleSet } from "../Utils/style";

const unit = css`
    ${({ padding, margin, columnArea, rowArea, flex }: StyleDefaultProps) => `
    display:flex;
    padding:${arrayStyleSet(padding)};
    margin:${arrayStyleSet(margin)};
    ${flex ? "flex:1;" : ""}
    grid-column: ${columnArea || ""};
    grid-row: ${rowArea || ""};
`}
`;

const theme = {
    unit,
};

export default theme;
