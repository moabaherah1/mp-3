// Mohammed Abaherah
// Projects.tsx
// October 20, 2025

import { styled } from "styled-components";
import { Calculator } from "../components/Calculator";
import { usePageTitle } from "../hooks/usePageTitle";

const Section = styled.section` margin-top: 20px;`;

export default function Projects() {
    usePageTitle("Projects");
    return (
        <>
            <h3>Projects</h3>
            <Section><Calculator /></Section>
        </>
    );
}
