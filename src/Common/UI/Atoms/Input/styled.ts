import styled from "styled-components";
import { Todo } from "./model";

export const Wrapper = styled.label`
    ${({ theme: { unit } }) => unit}
    ${({ disabled }: Todo) => `
        border:1px solid #555;
        ${disabled ? "cursor:no-drop;" : ""}
        input{
            outline: none;
        }
    `}
`;
