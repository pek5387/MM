import { Todo } from "./model";
import { Wrapper } from "./styled";

const index: React.FC<Todo> = ({ children, className, ...props }) => (
    <Wrapper className={"flex " + (className || "")} {...props}>
        {children}
    </Wrapper>
);

export default index;
