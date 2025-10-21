// Mohammed Abaherah
// education.tsx
// October 20, 2025
import styled from "styled-components";
import { usePageTitle } from "../hooks/usePageTitle";
import bueduImg from "../images/buedu.jpg";

const Intro = styled.div`
    display: flex;
    text-align: left;
    padding-top: 3%;
    align-items: flex-start; /* top-align image & text */

    img {
        display: block;
        float: left;
        max-width: 45%;
        height: auto;
        margin-right: 5%;
    }

    p {
        /* MP-1 exact padding */
        padding: 4% 5% 10% 10%;
        letter-spacing: 0.5px;
        line-height: 1.5;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        text-align: center;

        img { float: none; margin: 0 auto 10px; max-width: 80%; height: auto; }
        p  { padding: 0 5% 10% 5%; max-width: 600px; }
    }
`;

const EduItem = styled.div`
    margin-left: 5%;
    border-left: 4px solid #143450;
    margin-bottom: 40px;
    padding-left: 10px;
    h4 { padding-right: 5%; }
    p { font-style: italic; }

    @media screen and (max-width: 1024px) {
        display: flex; flex-direction: column; align-items: center; text-align: center;
        margin: 40px auto; border-left: none; border-top: 4px solid #143450;
        padding-top: 20px; width: 90%;
        h4 { padding-right: 0; margin-bottom: 10px; }
    }
`;

export default function Education() {
    usePageTitle("Education");
    return (
        <>
            <h3>Education</h3>

            <Intro>
                <img src={bueduImg} alt="Boston University" />
                <p>
                    To start my educational career, I went to Johnston Senior High School and finished within the top 5
                    of my class. During senior year, I was accepted into Boston University as a Computer Science major
                    at the College of Arts and Sciences. Currently, it is my final year at Boston University. Here is a small
                    timeline of my education:
                </p>
            </Intro>

            <section id="education">
                <h3>Timeline</h3>

                <EduItem>
                    <h4><b>B.A. in Computer Science | <i>Boston University, MA</i></b></h4>
                    <p><i>Sep 2022 - May 2026</i></p>
                </EduItem>

                <EduItem>
                    <h4><b>High School Diploma | <i>Johnston Senior High School, Johnston, RI</i></b></h4>
                    <p><i>June 2022</i></p>
                </EduItem>
            </section>
        </>
    );
}
