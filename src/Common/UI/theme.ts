import { css } from "styled-components";
import { arraySet } from "../Utils/style";
import { StyleDefaultProps } from "../Interface";

const unit = css`
    ${({ padding, margin, columnArea, rowArea, fill }: StyleDefaultProps) => `
    padding:${arraySet(padding)};
    margin:${arraySet(margin)};
    grid-column: ${columnArea || ""};
    grid-row: ${rowArea || ""};
    ${fill ? "flex:1;" : ""}
`}
`;

const theme = {
    unit,
};

export default theme;
