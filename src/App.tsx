import { Flex, Grid } from "./Common/UI/Atoms";
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Wrapper column={4} row={4}>
                <Flex
                    column
                    rowStart={3}
                    rowEnd={4}
                    columnStart={3}
                    columnEnd={4}
                    fill
                >
                    <Flex fill />
                    <Flex>수정 테스트</Flex>
                </Flex>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled(Grid)`
    height: 80vh;
`;

export default App;
