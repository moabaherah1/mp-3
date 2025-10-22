// Mohammed Abaherah
// Footer.tsx
// October 20, 2025

import { styled } from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #B8BDB5;
    text-align: center;
    padding: 10px;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <p>All rights reserved: <a href="#">Credits</a> &#169;</p>
        </FooterWrapper>
    );
}

