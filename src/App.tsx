import { Flex, Grid } from "./Common/UI/Atoms";
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Wrapper column={4} row={4}>
                <Flex column rowArea={"1/4"} fill>
                    test1
                    <Flex fill />
                </Flex>
                <Flex rowArea={"2/5"} columnArea={"2/3"}>
                    수정 테스트
                </Flex>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled(Grid)`
    height: 80vh;
`;

export default App;
