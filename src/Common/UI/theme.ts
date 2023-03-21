import { css } from "styled-components";
import { arraySet } from "../Utils/style";
import { StyleDefaultProps } from "../Model/Interface";

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
