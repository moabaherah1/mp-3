// Mohammed Abaherah
// App.tsx
//October 20 2025

import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import References from "./pages/References";
import About from "./pages/About";
import { Calculator } from "./components/Calculator";
import { styled } from "styled-components";

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    text-align: center;
    background-color: #889696;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;

const Main = styled.main`
    width: 70%;
    padding: 8px;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

export function App() {
    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/references" element={<References />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/calculator" element={<Calculator />} />
                    </Routes>
                </Main>
            </Container>
            <Footer />
        </PageWrapper>
    );
}

