import { Todo } from "./interface";
import { Wrapper } from "./styled";

const index = ({ children, className, ...props }: Todo) => {
    return (
        <Wrapper className={"grid " + (className || "")} {...props}>
            {children}
        </Wrapper>
    );
};

export default index;
