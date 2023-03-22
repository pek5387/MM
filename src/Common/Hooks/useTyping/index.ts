import { useCallback, useEffect, useState } from "react";
import { Todo } from "./model";

const useTyping = ({ letters, speed = 100, wait = 800 }: Todo) => {
    const [value, setValue] = useState("");
    const typing = async (n: number) => {
        const letter = letters[n].split("");
        let value = "";
        while (letter.length) {
            await ready(speed);
            value += letter.shift();
            setValue(value);
        }
        // 잠시 대기
        await ready(wait);

        // 지우는 효과
        remove(n);
    };

    const remove = async (n: number) => {
        const letter = letters[n].split("");

        while (letter.length) {
            await ready(speed);

            letter.pop();
            setValue(letter.join(""));
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        typing(!letters[n + 1] ? 0 : n + 1);
    };

    function ready(ms: number) {
        return new Promise((res) => setTimeout(res, ms));
    }

    useEffect(() => {
        typing(0);
    }, []);

    return value;
};

export default useTyping;
