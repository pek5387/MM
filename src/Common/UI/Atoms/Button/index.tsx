import React from "react";
import { useNavigate } from "react-router-dom";
import { Todo } from "./model";
import { Wrapper } from "./styled";

const Button: React.FC<Todo> = ({
    className,
    onClick,
    to,
    children,
    ...props
}) => {
    const navigate = useNavigate();
    return (
        <Wrapper
            className={"button " + (className || "")}
            onClick={to ? () => navigate(to) : onClick}
            {...props}
        >
            {children}
        </Wrapper>
    );
};

export default Button;
