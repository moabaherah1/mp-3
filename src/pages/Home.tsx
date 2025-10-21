// Mohammed Abaherah
// Home.tsx
// October 20, 2025

import { styled } from "styled-components";
import { usePageTitle } from "../hooks/usePageTitle";
import homeImg from "../images/sugurugeto.jpg";

const Intro = styled.div`
    display: flex;
    text-align: left;
    padding-top: 3%;
    img {
        float: left;
        max-width: 45%;
        height: auto;
        margin-right: 5%;
        display: block;
    }
    p {
        padding: 4% 5% 10% 0;
        letter-spacing: 0.5px;
        line-height: 1.5;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        text-align: center;
        img { float: none; margin: 0 auto 10px; max-width: 80%; height: auto; }
        p { padding: 0; width: 70%; margin: 0 auto; }
    }
`;

const UnderImage = styled.p` text-align: center;`;

export default function Home() {
    usePageTitle("Home");
    return (
        <>
            <h3>Home</h3>
            <Intro>
                <img src={homeImg} alt="Mohammed (Suguru Geto)" />
                <p>
                    Welcome to my resume webpage! I am Mohammed Abaherah, a Senior at Boston University studying Computer
                    Science. I like a multitude of things, specifically single player video games, Palestinian food, and anime.
                    Currently, I am looking for a job after graduation, so I can pursue a career in SWE. I love to work in teams
                    and I love learning anything that is new to me, whether in University or in life!
                </p>
            </Intro>
            <UnderImage>
                <br />On this website, you can find out more <b><u>about me</u></b>, view my <b><u>projects</u></b>,
                or learn about my general <b><u>education</u></b>. Please send any inquiries to <b>abaherah@bu.edu!</b>
            </UnderImage>
        </>
    );
}

