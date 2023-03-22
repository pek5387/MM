import React from "react";
import { Todo } from "./model";
import { Wrapper } from "./styled";

const index: React.FC<Todo> = ({
    value,
    onChange,
    padding = [8, 12],
    className,
    ...props
}) => {
    return (
        <Wrapper
            className={"input " + (className || "")}
            padding={padding}
            {...props}
        >
            <input
                value={value}
                onChange={onChange}
                disabled={props?.disabled}
            />
        </Wrapper>
    );
};

export default index;
