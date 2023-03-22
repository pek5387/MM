import { css } from "styled-components";
import { StyleDefaultProps } from "../Model/Interface";
import { arraySet } from "../Utils/style";

const unit = css`
    ${({ padding, margin, columnArea, rowArea, flex }: StyleDefaultProps) => `
    display:flex;
    padding:${arraySet(padding)};
    margin:${arraySet(margin)};
    ${flex ? "flex:1;" : ""}
    grid-column: ${columnArea || ""};
    grid-row: ${rowArea || ""};
`}
`;

const theme = {
    unit,
};

export default theme;
