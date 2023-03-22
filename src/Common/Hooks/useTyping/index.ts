import { useEffect, useRef, useState } from "react";
import { Model } from "./model";

const useTyping = ({ letters, speed, type, wait = 800 }: Model) => {
    const [state, setState] = useState("");
    const ref = useRef(0);
    const firstRef = useRef(false);
    const typing = async (n: number, value: string = "", overlap: number) => {
        if (overlap !== ref.current) return;
        const letter = letters[n];
        const remain = speed % letter.length;
        const s =
            type === "complate" ? (speed - remain) / letter?.length : speed;
        if (value?.length === letter?.length) {
            await ready(wait);
            // 지우는 효과
            remove(n, overlap);
        } else {
            if (firstRef.current) {
                firstRef.current = false;
                typing(n, "", overlap);
            } else {
                await ready(value ? s : s + remain);
                const state = letter?.slice(0, value?.length + 1);
                setState(state);
                typing(n, state, overlap);
            }
        }
    };

    const remove = async (n: number, overlap: number) => {
        if (overlap !== ref.current) return;
        const letter = letters[n].split("");
        const remain = speed % letter.length;
        const s =
            type === "complate" ? (speed - remain) / letter?.length : speed;
        let first = true;
        while (letter.length) {
            await ready(first ? s + remain : s);
            first = false;
            letter.pop();
            setState(letter.join(""));
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        typing(!letters[n + 1] ? 0 : n + 1, "", overlap);
    };

    function ready(ms?: number) {
        return new Promise((res) => setTimeout(res, ms));
    }

    useEffect(() => {
        ref.current = ref.current + 1;
        firstRef.current = true;
        typing(0, "", ref.current);
    }, []);

    return state;
};

export default useTyping;
