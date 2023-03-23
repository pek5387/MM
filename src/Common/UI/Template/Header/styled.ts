import styled from "styled-components";

export const Wrapper = styled.header`
    ${({ theme: { unit } }) => unit}
    position: fixed;
    z-index: 200;
    width: 100vw;
    height: 80rem;
    top: 0;
    left: 0;
    background-color: #fee;
`;
