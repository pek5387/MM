import { css } from "styled-components";
import { StyleDefaultProps } from "../Model/Interface";
import { arraySet } from "../Utils/style";

const unit = css`
    ${({ padding, margin, columnArea, rowArea, fill }: StyleDefaultProps) => `
    padding:${arraySet(padding)};
    margin:${arraySet(margin)};
    ${fill ? "flex:1;" : ""}
    grid-column: ${columnArea || ""};
    grid-row: ${rowArea || ""};
`}
`;

const theme = {
    unit,
};

export default theme;
