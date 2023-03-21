import React from "react";
import { useNavigate as navigate } from "react-router-dom";
import { Todo } from "./model";
import { Wrapper } from "./styled";

const index: React.FC<Todo> = ({
    className,
    onClick,
    to,
    children,
    ...props
}) => (
    <Wrapper
        className={"grid " + (className || "")}
        onClick={to ? () => navigate()(to) : onClick}
        {...props}
    >
        {children}
    </Wrapper>
);

export default index;
