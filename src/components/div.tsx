// Mohammed Abaherah
// Div.tsx
// October 21, 2025

import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "../main/Home";
import About from "../main/About";
import Education from "../main/Education";
import Experience from "../main/Experience";
import Projects from "../main/Projects";
import References from "../main/References";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Wrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #889696;
    text-align: center;
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
    padding: 10px;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <Wrapper>
            <Header />
            <Container>
                <Nav />
                <Main>{children}</Main>
            </Container>
            <Footer />
        </Wrapper>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout><Home /></PageLayout>,
    },
    {
        path: "/about",
        element: <PageLayout><About /></PageLayout>,
    },
    {
        path: "/education",
        element: <PageLayout><Education /></PageLayout>,
    },
    {
        path: "/experience",
        element: <PageLayout><Experience /></PageLayout>,
    },
    {
        path: "/projects",
        element: <PageLayout><Projects /></PageLayout>,
    },
    {
        path: "/references",
        element: <PageLayout><References /></PageLayout>,
    },
    {
        path: "*",
        element: <PageLayout><p>Page not found.</p></PageLayout>,
    },
]);

export default function Div() {
    return <RouterProvider router={router} />;
}
