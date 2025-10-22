// Mohammed Abaherah
// Projects.tsx
// October 21, 2025

import styled from "styled-components";
import { Calculator } from "../components/Calculator";

const Section = styled.section`
    margin-top: 30px;
    text-align: center;

    @media screen and (max-width: 1024px) {
        margin-top: 20px;
    }
`;

export default function Projects() {
    return (
        <>
            <title>Projects | Mohammed's Resume</title>
            <h3>Projects</h3>

            <Section>
                <Calculator />
            </Section>
        </>
    );
}

