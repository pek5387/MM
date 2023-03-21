import { Button, Flex, Grid } from "./Common/UI/Atoms";
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Wrapper column={4} row={4}>
                <Flex column rowArea={"1/4"} fill>
                    test1
                    <Flex fill />
                </Flex>
                <Flex
                    column
                    rowArea={"2/5"}
                    columnArea={"1/4"}
                    padding={["20px", undefined, "40px"]}
                    align={"center"}
                    fill
                >
                    <Button fill onClick={() => alert("test")}>
                        test
                    </Button>
                </Flex>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled(Grid)`
    height: 80vh;
`;

export default App;
