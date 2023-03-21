import styled from "styled-components";
import { Todo } from "./model";

export const Wrapper = styled.button`
    ${({ theme: { unit } }) => unit}
    ${({ disabled }: Todo) => `
        display: flex;
    `}
`;
