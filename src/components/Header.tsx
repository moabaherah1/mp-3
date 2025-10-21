// Mohammed Abaherah
// Header.tsx
//October 20, 2025

import { styled } from 'styled-components';

const HeaderWrapper = styled.header`
    background-color: #B8BDB5;
    text-align: left;
    padding: 20px;
`;

const H1 = styled.h1``;
const P = styled.p``;

export function Header() {
    return (
        <HeaderWrapper>
            <H1>Mohammed's Resumé</H1>
            <P>A website showcasing Mohammed's accomplishments</P>
        </HeaderWrapper>
    );
}
