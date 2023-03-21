import { Button, Flex, Grid } from "./Common/UI/Atoms";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="*"
                    element={
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
                                <Button fill to={"/dd"}>
                                    test
                                </Button>
                            </Flex>
                        </Wrapper>
                    }
                />
                <Route path={"/dd"} element={<>테스트 진행</>} />
            </Routes>
        </div>
    );
}

const Wrapper = styled(Grid)`
    height: 80vh;
`;

export default App;
