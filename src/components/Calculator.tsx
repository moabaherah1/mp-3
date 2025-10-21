// Mohammed Abaherah
// Calculator.tsx
// October 20, 2025

import { styled } from "styled-components";
import { useCalculator } from "../hooks/useCalculator";

const CalcWrapper = styled.div`
    background-color: #f9f9f9;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    display: inline-block;
    text-align: center;
    margin: 20px auto;
`;

const Input = styled.input`
    width: 90px;
    padding: 6px;
    font-size: calc(12px + 0.2vw);
    text-align: center;
    border: 1px solid #aaa;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 45px;
    height: 45px;
    margin: 5px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #eee;
    cursor: pointer;
`;

const Output = styled.div<{ negative?: boolean }>`
    background-color: ${props => props.negative ? "#d9534f" : "#fff"};
    color: ${props => props.negative ? "#fff" : "#000"};
    border: 1px solid ${props => props.negative ? "#a94442" : "#ccc"};
    font-weight: ${props => props.negative ? "bold" : "normal"};
    font-size: calc(18px + 0.2vw);
    padding: 10px;
    margin-top: 10px;
    text-align: center;
    border-radius: 6px;
`;

export function Calculator() {
    const { first, second, output, setFirst, setSecond, calculate, clear } = useCalculator();

    return (
        <CalcWrapper>
            <table>
                <caption>PAC-alculator</caption>
                <tbody>
                <tr>
                    <th><label>First Number: <Input value={first} onChange={e => setFirst(e.target.value)} /></label></th>
                    <th>
                        <Button onClick={() => calculate("+")}>+</Button>
                        <Button onClick={() => calculate("-")}>-</Button>
                        <Button onClick={() => calculate("*")}>*</Button>
                        <Button onClick={() => calculate("/")}>/</Button>
                        <Button onClick={() => calculate("**")}>**</Button>
                        <Button onClick={clear}>Clear</Button>
                    </th>
                    <th><label>Second Number: <Input value={second} onChange={e => setSecond(e.target.value)} /></label></th>
                </tr>
                </tbody>
            </table>
            <Output negative={typeof output === "number" && output < 0}>{output}</Output>
        </CalcWrapper>
    );
}
