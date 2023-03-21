import React from "react";
import { Todo } from "./model";
import { Wrapper } from "./styled";

const index: React.FC<Todo> = ({
    value,
    onChange,
    padding = [8, 12],
    ...props
}) => {
    return (
        <Wrapper padding={padding} {...props}>
            <input
                value={value}
                onChange={onChange}
                disabled={props?.disabled}
            />
        </Wrapper>
    );
};

export default index;
