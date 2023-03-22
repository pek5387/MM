import { Button, Flex, Grid, Input } from "./Common/UI/Atoms";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
    const [state, setState] = useState("");

    return (
        <div className="App">
            <Routes>
                <Route
                    path="*"
                    element={
                        <Wrapper column={4} row={4}>
                            <Flex column rowArea={"1/4"} flex>
                                {/* {title} */}
                                <select>
                                    <option>123</option>
                                </select>
                                <Flex />
                            </Flex>
                            <Flex
                                column
                                rowArea={"2/5"}
                                columnArea={"1/4"}
                                padding={["20px", undefined, "40px"]}
                                align={"center"}
                                // flex
                            >
                                <Input
                                    onChange={(e) => setState(e?.target?.value)}
                                    value={state}
                                />
                                <Button disabled to={"/dd"}></Button>
                            </Flex>
                        </Wrapper>
                    }
                />
                <Route path={"/dd"} element={<>테스트 진행</>} />
            </Routes>
        </div>
    );
};

const Wrapper = styled(Grid)`
    height: 80vh;
`;

export default App;
