// Mohammed Abaherah
// Education.tsx
// October 21, 2025

import styled from "styled-components";

const Intro = styled.div`
    display: flex;
    text-align: left;
    padding-top: 30px;

    img {
        display: block;
        float: left;
        max-width: 45%;
        height: auto;
        margin-right: 5%;
    }

    p {
        padding: 40px 50px 100px 100px;
        letter-spacing: 0.5px;
        line-height: 1.5;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        text-align: center;
        padding: 5%;

        img {
            float: none;
            display: block;
            margin: 0 auto 10px auto;
            max-width: 80%;
            height: auto;
        }

        p {
            padding: 0;
            width: 70%;
            margin: 0 auto;
        }
    }
`;

const EduItem = styled.div`
    margin-left: 5%;
    border-left: 4px solid #143450;
    margin-bottom: 40px;
    padding-left: 10px;

    h4 {
        padding-right: 5%;
    }

    p {
        font-style: italic;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        text-align: center;
        padding: 5%;
        border-left: none;
        border-top: 4px solid #143450;
        margin: 40px auto;
        width: 90%;
    }
`;

const Section = styled.section`
    h3 {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export default function Education() {
    return (
        <>
            <title>Education | Mohammed's Resume</title>
            <h3>Education</h3>

            <Intro>
                <img src="../../public/images/buedu.jpg" alt="Boston University" />
                <p>
                    To start my educational career, I went to Johnston Senior High School and finished
                    within the top 5 of my class. During senior year, I was accepted into Boston
                    University as a Computer Science major at the College of Arts and Sciences.
                    Currently, it is my final year at Boston University. Here is a small timeline of my
                    education:
                </p>
            </Intro>

            <Section id="education">
                <h3>Timeline</h3>

                <EduItem>
                    <h4>
                        <b>
                            B.A. in Computer Science | <i>Boston University, MA</i>
                        </b>
                    </h4>
                    <p>Sep 2022 - May 2026</p>
                </EduItem>

                <EduItem>
                    <h4>
                        <b>
                            High School Diploma |{" "}
                            <i>Johnston Senior High School, Johnston, RI</i>
                        </b>
                    </h4>
                    <p>June 2022</p>
                </EduItem>
            </Section>
        </>
    );
}
