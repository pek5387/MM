import { Button, Flex, Grid, Input } from "./Common/UI/Atoms";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useTyping } from "./Common/Hooks";

const App = () => {
    const [state, setState] = useState("");
    const value = useTyping({
        letters: ["넷다섯여섯", "타입스크립트", "뭘 만들어야 좋을지"],
        speed: 2000,
        type: "complate",
        wait: 800,
    });
    const value2 = useTyping({
        letters: ["하나둘셋", "테스트 진행", "12344567"],
        type: "complate",
        speed: 2000,
        wait: 800,
    });

    return (
        <div className="App">
            <Routes>
                <Route
                    path="*"
                    element={
                        <Wrapper column={4} row={4}>
                            <Flex column columnArea={"1/4"} flex>
                                {/* {title} */}
                                {value}|<br />
                                {value2}|
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
