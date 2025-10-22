// Mohammed Abaherah
// Header.tsx
// October 21, 2025
import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: #B8BDB5;
    text-align: left;
    padding: 12px 16px 8px 16px;
`;

const H1 = styled.h1`
  margin: 0 0 6px 0;
`;

const Sub = styled.p`
  margin: 0;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <H1>Mohammed's Resumé</H1>
            <Sub>A website showcasing Mohammed's accomplishments</Sub>
        </HeaderWrapper>
    );
}
