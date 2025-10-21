// Mohammed Abaherah
// useCalculator.ts
// October 20, 2025import { useState } from "react";

import { useState } from "react";

export function useCalculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [output, setOutput] = useState<string | number>("");

    const calculate = (op: string) => {
        const one = Number(first);
        const two = Number(second);
        let result = 0;

        switch(op) {
            case "+": result = one + two; break;
            case "-": result = one - two; break;
            case "*": result = one * two; break;
            case "/": result = one / two; break;
            case "**": result = one ** two; break;
        }

        setOutput(result);
    }

    const clear = () => {
        setFirst("");
        setSecond("");
        setOutput("");
    }

    return { first, second, output, setFirst, setSecond, calculate, clear };
}
