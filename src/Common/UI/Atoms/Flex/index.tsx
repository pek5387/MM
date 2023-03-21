import { Todo } from "./interface";
import { Wrapper } from "./styled";

const index = ({ children, className, ...props }: Todo) => {
    return (
        <Wrapper className={"flex " + (className || "")} {...props}>
            {children}
        </Wrapper>
    );
};

export default index;
