import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useTyping } from "Common/Hooks";
import { Flex, Grid } from "Common/UI/Atoms";
import { Header } from "Common/UI/Template";

const App: React.FC = () => {
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
        <>
            <Header />
            <Routes>
                <Route
                    path="*"
                    element={
                        <Wrapper column={4} row={4}>
                            <Flex column columnArea={"1/4"} flex>
                                {value}|<br />
                                {value2}|
                                <Flex />
                            </Flex>
                            {/* <Imgage
                                src={
                                    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                                }
                            /> */}
                        </Wrapper>
                    }
                />
                <Route path={"/dd"} element={<>테스트 진행</>} />
            </Routes>
        </>
    );
};

const Wrapper = styled(Grid)`
    height: 80vh;
`;

const Imgage = styled.img`
    ${({ theme: { unit } }) => unit}
    grid-column:1/4;
    grid-row: 0/4;
`;

export default App;
